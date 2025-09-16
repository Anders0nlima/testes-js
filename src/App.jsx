import './App.css'
import AppRoutes from './router'
import { LanguageProvider } from './studies/navbar/translationComponents/LanguageContext'

function App() {

  return (
    <>
       <LanguageProvider>
          <AppRoutes/>
       </LanguageProvider>
    </>
  )
}

export default App
