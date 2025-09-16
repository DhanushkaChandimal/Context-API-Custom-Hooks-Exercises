import { useState } from 'react'

export const useBookAvailability = (bookId) => {
    const [isAvailable, setAvailable] = useState(false);
    return isAvailable;
}

export default useBookAvailability;