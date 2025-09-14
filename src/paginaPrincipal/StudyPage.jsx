// src/paginaPrincipal/StudyPage.jsx
import React, { Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./studyPage.module.css";

/**
 * Map de componentes de estudo. Cada chave é o :id da rota.
 * Adicione novas entradas conforme criar novos estudos.
 */
const componentMap = {
  navbar: React.lazy(() => import("../studies/navbar/Navbar")),
  // forms: React.lazy(() => import("../studies/forms/FormsExample")),
  // "css-modules": React.lazy(() => import("../studies/css-modules/CssModulesExample")),
};

export const StudyPage = () => {
  const { id } = useParams();
  const StudyComponent = componentMap[id];

    if (!StudyComponent) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h2>Tópico não encontrado</h2>
          <Link to="/">Voltar</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.preview}>
        <Suspense fallback={<div className={styles.loading}>Carregando componente...</div>}>
          <StudyComponent />
        </Suspense>
      </div>

      <footer className={styles.footer}>
        <p>
          Visualização do componente — O componente abaixo é uma pré-visualização live. <br />
          Abra o código no VSCode para editar.
        </p>
        <Link to="/" className={styles.back}>← Voltar</Link>
      </footer>
    </div>
  );
};

export default StudyPage;