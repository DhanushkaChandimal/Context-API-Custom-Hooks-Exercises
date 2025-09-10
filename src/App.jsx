import { useState } from 'react'
import './App.css'
import ThemedComponent from './components/ThemedComponent'
import ThemeContext from './context/ThemeContext'

function App() {
  const [theme] = useState("dark")

  return (
    <ThemeContext.Provider value={{theme}}>
      <ThemedComponent/>
    </ThemeContext.Provider>
  )
}

export default App
