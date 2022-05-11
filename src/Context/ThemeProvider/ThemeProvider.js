import React, { createContext, useState } from 'react';

export const ThemeContext= createContext(null)
const ThemeProvider = ({children}) => {
    const [theme, setTheme]= useState("light")
    const toggleTheme=()=>{
        setTheme((curr)=>(curr==="light"?"dark":"light"))
    }
    return (
       <ThemeContext.Provider value={{theme, setTheme}}>
           {children}
       </ThemeContext.Provider>
    );
};

export default ThemeProvider;