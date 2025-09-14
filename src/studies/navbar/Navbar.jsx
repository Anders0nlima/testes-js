// src/paginaPrincipal/studies/navbar/Navbar.jsx
import React, { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>MeuEstudo</div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li><a href="#home" onClick={(e)=>e.preventDefault()}>Home</a></li>
            <li><a href="#sobre" onClick={(e)=>e.preventDefault()}>Sobre</a></li>
            <li><a href="#exemplos" onClick={(e)=>e.preventDefault()}>Exemplos</a></li>
          </ul>
        </nav>

        <button 
          className={styles.burger} 
          aria-label="Abrir menu" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      <main className={styles.content}>
        <h1>Bem-vindo ao espaço de estudos 🚀</h1>
        <p>Este é um exemplo de página com Navbar ocupando 100% da tela.</p>
      </main>
    </div>
  );
}