// isso permite compartilhar recorsos entre nossas paginas (compoentes)
import styles from "../useContext/css/UseContextDemo.module.css"


import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const UseContextDemo = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <main className={theme === "dark" ? styles.dark_theme : styles.light_theme}>
    <h1>Mudar de cor: </h1>
    <p>o tema atual é: {theme}</p>
    <button onClick={toggleTheme}>Alternar tema</button>
    </main>
  );
};

export default UseContextDemo;