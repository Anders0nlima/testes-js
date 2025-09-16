import styles from "../paginaPrincipal/homePage.module.css"
import { Link } from "react-router-dom";

const studyItems = [
  { id: "navbar", title: "Construindo um Navbar", description: "Exemplo passo-a-passo de um navbar responsivo." },
  { id: "hooks", title: "Usando hooks", description: "Conturindo e entendo hooks" },
  { id: "css-modules", title: "CSS Modules", description: "Boas práticas e exemplos." },
  // adiciona mais itens conforme quiser
];

export const HomePage = () => {
  
    return(
          <main className={styles.homepage}>
      <header className={styles.header}>
        <h1>Espaço de Estudos</h1>
        <p>Escolha um tópico para abrir a página do estudo.</p>
      </header>

      <section className={styles.grid}>
        {studyItems.map(item => (
          <Link key={item.id} to={`/study/${item.id}`} className={styles.cardLink}>
            <article className={styles.card}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          </Link>
        ))}
      </section>
    </main>
    )
}