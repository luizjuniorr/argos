import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export function BotaoClaroEscuro() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { button, setButton} = useState(true)

    function modoEscuroClaro() {
        toggleTheme();

    if (button === "true") {   
        setButton(false)
        return
    }
    setButton(true)
        
    }
    


    return (
        <>
            { button ? (
                <div onClick={modoEscuroClaro()} className="dark:bg-white bg-dark-mode w-15 h-5 rounded-full flex items-center justify-start cursor-pointer">
                    <div className="dark:bg-dark-mode bg-white w-4 h-4 rounded-full ml-1"></div>
                </div>
            ) : (
                <div onClick={modoEscuroClaro()} className="dark:bg-white bg-dark-mode w-15 h-5 rounded-full flex items-center justify-end cursor-pointer">
                    <div className="dark:bg-dark-mode bg-white w-4 h-4 rounded-full ml-1"></div>
                </div>
            )}
        </>
    )
    
}
