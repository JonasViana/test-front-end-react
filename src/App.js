import Header from './components/header/Header'
import Ingredientes from './components/ingredientes/Ingredientes'
import Pedido from './components/pedido/Pedido'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Pedido />    
        <Ingredientes />
      </div>
    </div>
  )
}
export default App
