import './App.css'
import ThemedComponent from './components/ThemedComponent'
import ThemeContext from './context/ThemeContext'

function App() {

  return (
    <ThemeContext.Provider value='dark'>
      <ThemedComponent/>
    </ThemeContext.Provider>
  )
}

export default App
