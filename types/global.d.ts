// global.d.ts
import { Mongoose, Connection } from 'mongoose';

declare global {
    var mongoose: { conn: Connection | null; promise: Promise<Connection> | null };
}
