'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the types for the context
interface MongoContextType {
  [key: string]: any;
}

const defaultContextValue: MongoContextType = {
};

const MongoContext = createContext<MongoContextType>(defaultContextValue);

interface MongoProviderInt {
  data?: any;
  children: React.ReactNode;
}

export const MongoProvider: React.FC<MongoProviderInt> = ({ children, data = {} }) => {

  return (
    <MongoContext.Provider value={data}>
      {children}
    </MongoContext.Provider>
  );
};

export const useDB = (): MongoContextType => {
  const context = useContext(MongoContext);
  if (!context) {
    throw new Error('useMongo must be used within a MongoProvider');
  }
  return context;
};
