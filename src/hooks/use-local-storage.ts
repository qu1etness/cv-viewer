import { useState, useCallback, useEffect } from 'react';

export function useLocalStorage<T>(key: string) {
    const readValue = useCallback((): T => {
        if (typeof window === 'undefined') return null;
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return null;
        }
    }, [key]);

    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setValue = useCallback((value: T | ((val: T) => T)) => {
        try {
            setStoredValue((prev) => {
                const valueToStore = value instanceof Function ? value(prev) : value;
                if (typeof window !== 'undefined') {
                    localStorage.setItem(key, JSON.stringify(valueToStore));
                }
                return valueToStore;
            });
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    }, [key]);

    useEffect(() => {
        setStoredValue(readValue());
    }, [readValue]);

    return [storedValue, setValue] as const;
}