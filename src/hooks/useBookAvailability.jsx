import { useState, useEffect } from 'react'

export const useBookAvailability = (bookId) => {
    const [isAvailable, setAvailable] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        // Simulate fetching book availability from an API
        setTimeout(() => {
            try {
                // This is where you would fetch data from an actual API
                // For demonstration, we're randomly setting availability
                setAvailable(Math.random() > 0.5);
                setIsLoading(false);
            } catch (e) {
                setError(e);
                setIsLoading(false);
            }
        }, 1000);
    }, [bookId]);
    
    return { isAvailable, isLoading, error };
}

export default useBookAvailability;