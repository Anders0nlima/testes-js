import { createContext, useState } from "react";
import NavBar from "../../../../navbar/Navbar";

/*ter um estado ou dado global que vários componentes precisam acessar*/
/*a mudança de idioma foi feita usando hook - useContext */
/*essas coisas sao usadas la no App porque e algo geral - todos os componetes usam*/

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
    )
}