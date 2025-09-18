import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useBookAvailability } from "../hooks/useBookAvailability";

const ThemedComponent = () => {
    const theme = useContext(ThemeContext)
    const bookAvailability = useBookAvailability()

    return(
        <>
            <h1>Current Theme: {theme}</h1>
            <p>Book availability: {bookAvailability}</p>
        </>
    );
}

export default ThemedComponent;