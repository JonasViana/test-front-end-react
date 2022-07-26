import Header from './components/header/Header'
import Ingrediente from './components/ingredientes/Ingrediente'
import Pedido from './components/pedido/Pedido'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Pedido />
        <Ingrediente />
      </div>
    </div>
  )
}
export default App
