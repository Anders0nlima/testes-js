import './App.css'
import AppRoutes from './router'
import { ThemeProvider } from './studies/hooks/paginas/useContext/context/ThemeContext'
import { LanguageProvider } from './studies/navbar/translationComponents/LanguageContext'

function App() {

  return (
    <>
       <ThemeProvider> {/*para o uso do useContext - tá no pai (mais alto) iguais nas paginas*/}
          <LanguageProvider> {/*ligua*/}
             <AppRoutes/>
          </LanguageProvider>
       </ThemeProvider>
    </>
  )
}

export default App
