'use server'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || ""

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local',
    )
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function connect() {
    if (cached.conn) {
        return cached.conn
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        }
        cached.promise = mongoose.connect(MONGODB_URI, opts).then(async mongoose => {
            await mongoose.connection.db?.admin().command({ ping: 1 })
            return mongoose.connection.useDb('portfolio')
        })
    }
    try {
        cached.conn = await cached.promise
    } catch (e) {
        cached.promise = null
        throw e
    }
    return cached.conn
}

async function select(collectionName: string) {
    const conn = await connect()
    const col = conn.collection(collectionName)
    return await col.find({}, {projection: {_id: 0}}).toArray()
}

export { connect, select }
