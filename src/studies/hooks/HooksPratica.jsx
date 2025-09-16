import React from "react";
import { Link } from "react-router-dom";
import styles from "./HooksPraticas.module.css"; // crie se quiser estilizar parecido com homepage


const hookItems = [
  { id: "usestate", title: "useState", description: "Gerenciar estado local em componentes." },
  { id: "useeffect", title: "useEffect", description: "Executar efeitos colaterais (side effects)." },
  { id: "usecontext", title: "useContext", description: "Compartilhar dados via Context API." },
  { id: "useref", title: "useRef", description: "Referências mutáveis sem re-renderização." },
  { id: "usememo", title: "useMemo", description: "Memorizar valores calculados." },
  { id: "usecallback", title: "useCallback", description: "Memorizar funções." },
];

const HooksPratica = () => {
  return (
    <main className={styles.hooksPage}>
      <h1>Estudos de Hooks</h1>
      <p>Clique em um hook para abrir sua página prática:</p>

      <section className={styles.grid}>
        {hookItems.map((item) => (
          <Link key={item.id} to={`/study/hooks/${item.id}`} className={styles.cardLink}>
            <article className={styles.card}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default HooksPratica;