import { useEffect, useState } from "react";

export function useDebounce<T>(values: T, delay?:number): T {
    const [ debouncedValue, setDebouncedValue ] = useState<T>(values);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(values);
        }, delay || 500);

        return () => {
            clearTimeout(timer);
        }
    }, [values, delay]);

    return debouncedValue;
}