
import { createContext, useContext } from "react";


// Context API
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme : ()=>{},
    lightTheme : ()=>{},
})


// Context Provider in same file
export const ThemeProvider = ThemeContext.Provider

export default function useTheme()
{
    return useContext(ThemeContext)
}


