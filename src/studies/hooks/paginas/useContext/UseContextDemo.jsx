// isso permite compartilhar recorsos entre nossas paginas (compoentes)
import styles from "../useContext/css/UseContextDemo.module.css"
import { useLanguage } from "../../../navbar/translationComponents/LanguageContext";


import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import NavBar from "../../../navbar/Navbar";

const UseContextDemo = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

const {t} = useLanguage()

  return (
    <>
    <NavBar/>
    <div className={styles.container}>
    <main className={theme === "dark" ? styles.dark_theme : styles.light_theme}>
    <h1>{t("troca.ex1")}</h1>
    <p>o tema atual é: {theme}</p>
    <button onClick={toggleTheme}>Alternar tema</button>
    </main>
     </div>
    </>
  );
};

export default UseContextDemo;