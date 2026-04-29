import { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "../context/ThemeContext";

export function ThemeProvider({children}:{children: React.ReactNode}){
const [theme,setTheme] = useState<Theme>(()=>{
return (localStorage.getItem('theme') as Theme) || 'light'
})
const toggleTheme = () =>{
setTheme(prev => prev === 'light' ? 'dark' : 'light')
}

useEffect(()=>{
localStorage.setItem('theme', theme)
document.body.className = theme
},[theme])
return(
<ThemeContext.Provider value={({theme,toggleTheme})}>
    {children}
</ThemeContext.Provider>
)
}
