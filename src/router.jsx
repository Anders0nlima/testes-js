import { Routes, Route, Navigate } from 'react-router-dom'; 
import { HomePage } from './paginaPrincipal/homePage';
import { StudyPage } from './paginaPrincipal/StudyPage';



function AppRoutes() {
    return (
        <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* rota dinâmica: /study/:id */}
          <Route path="/study/:id" element={<StudyPage />} />
        </Routes>
      );
  }
  
  export default AppRoutes;