import { Routes, Route, Navigate } from 'react-router-dom'; 
import { HomePage } from './paginaPrincipal/homePage';
import { StudyPage } from './paginaPrincipal/StudyPage';

import HooksPratica from './studies/hooks/HooksPratica';
import UseStateDemo from './studies/hooks/paginas/UseStateDemo';
import UseEffectDemo from './studies/hooks/paginas/useEffect/UseEffectDemo';
import UseContextDemo from './studies/hooks/paginas/useContext/UseContextDemo';
import UseRefDemo from './studies/hooks/paginas/UseRefDemo';
import UseMemoDemo from './studies/hooks/paginas/UseMemoDemo';
import UseCallbackDemo from './studies/hooks/paginas/UseCallbackDemo';



function AppRoutes() {
    return (
        <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* rota dinâmica: /study/:id */}
          <Route path="/study/:id" element={<StudyPage />} />

          {/* rotas específicas para os hooks */}
           <Route path="/study/hooks" element={<HooksPratica />} />
          <Route path="/study/hooks/usestate" element={<UseStateDemo />} />
          <Route path="/study/hooks/useeffect" element={<UseEffectDemo />} />
          <Route path="/study/hooks/usecontext" element={<UseContextDemo />} />
          <Route path="/study/hooks/useref" element={<UseRefDemo />} />
          <Route path="/study/hooks/usememo" element={<UseMemoDemo />} />
          <Route path="/study/hooks/usecallback" element={<UseCallbackDemo />} />
        </Routes>
      );
  }
  
  export default AppRoutes;