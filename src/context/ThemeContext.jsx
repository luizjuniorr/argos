import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.body.classList.remove('light', 'bg-dark-mode');
            document.body.classList.add('dark', 'bg-dark-mode');
        } else {
            setTheme("light");
            document.body.classList.remove('dark', 'bg-dark-mode');
            document.body.classList.add('light');
        }
    }
    

    
    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}