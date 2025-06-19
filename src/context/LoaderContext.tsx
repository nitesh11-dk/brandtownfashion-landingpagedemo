import React, { createContext, useContext, useState, useCallback } from 'react';

interface LoaderContextType {
  loading: boolean;
  setLoading: (val: boolean) => void;
  increment: () => void;
  decrement: () => void;
}

const LoaderContext = createContext<LoaderContextType>({
  loading: true,
  setLoading: () => {},
  increment: () => {},
  decrement: () => {},
});

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pending, setPending] = useState(0); // Start with 0, not 1
  const loading = pending > 0;

  const increment = useCallback(() => setPending((p) => p + 1), []);
  const decrement = useCallback(() => setPending((p) => Math.max(0, p - 1)), []);
  const setLoading = useCallback((val: boolean) => setPending(val ? 1 : 0), []);

  return (
    <LoaderContext.Provider value={{ loading, setLoading, increment, decrement }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext); 