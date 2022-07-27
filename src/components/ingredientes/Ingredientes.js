import { React, useEffect, useState } from 'react'

import '../ingredientes/Ingredientes.css'

import sinalMenos from '../ingredientes/images/sinal-menos.png'

import sinalMais from '../ingredientes/images/sinal-mais.png'

const baseURL =
  'https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products'

const Ingrediente = () => {
  const [products, setProducts] = useState([])
  const [cheddar, setCheddar] = useState(0)
  const [cebola, setCebola] = useState(0)
  const [molhoCheddar, setMolhoCheedar] = useState(0)
  const [molhoPicanha, setMolhoPicanha] = useState(0)
  const [talher, setTalher] = useState(0)
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(baseURL)

      const data = await res.json()

      setProducts(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      {products.map((product, index) => {
        return (
          <div className="borda__ingredientes">
            <div className="adicionar__ingrediente">
              <p className="adicionar__ingredientes">Adicionar ingredientes</p>
              <p className="maxIngredientes">Até 8 ingredientes</p>
            </div>
            <div className="ingrediente">
              <div className="valor__ingrediente">
                <p key={products[0].ingredients[0].itens[0].id} className="ingrediente__name">{products[0].ingredients[0].itens[0].nm_item}</p>
                <p key={products[0].ingredients[0].itens[0].id} className="ingrediente_value">{products[0].ingredients[0].itens[0].vl_item}</p>
              </div>
              <div className="adicao__ingrediente">
                <button onClick={() => setCheddar(prevCount => prevCount - 1)}>
                  <img src={sinalMenos} alt="" />
                </button>
                <p>{cheddar}</p>
                <button onClick={() => setCheddar(prevCount => prevCount + 1)}>
                  <img src={sinalMais} alt="" />
                </button>
              </div>
            </div>
            <div className="linha__horizontal"></div>
            <div className="ingrediente">
              <div className="valor__ingrediente">
                <p key={products[0].ingredients[0].itens[1].id} className="ingrediente__name">{products[0].ingredients[0].itens[1].nm_item}</p>
                <p key={products[0].ingredients[0].itens[1].id} className="ingrediente_value">{products[0].ingredients[0].itens[1].vl_item}</p>
              </div>
              <div className="adicao__ingrediente">
                <button onClick={() => setCebola(prevCount => prevCount - 1)}>
                  <img src={sinalMenos} alt="" />
                </button>
                <p>{cebola}</p>
                <button onClick={() => setCebola(prevCount => prevCount + 1)}>
                  <img src={sinalMais} alt="" />
                </button>
              </div>
            </div>
            <div className="linha__horizontal"></div>
            <div className="ingrediente">
              <div className="valor__ingrediente">
                <p key={products[0].ingredients[0].itens[2].id} className="ingrediente__name">{products[0].ingredients[0].itens[2].nm_item}</p>
                <p key={products[0].ingredients[0].itens[2].id} className="ingrediente_value">{products[0].ingredients[0].itens[2].vl_item}</p>
              </div>
              <div className="adicao__ingrediente">
                <button onClick={() => setMolhoCheedar(prevCount => prevCount - 1)}>
                  <img src={sinalMenos} alt="" />
                </button>
                <p>{molhoCheddar}</p>
                <button onClick={() => setMolhoCheedar(prevCount => prevCount + 1)}>
                  <img src={sinalMais} alt="" />
                </button>
              </div>
            </div>
            <div className="linha__horizontal"></div>
            <div className="ingrediente">
              <div className="valor__ingrediente">
                <p key={products[0].ingredients[0].itens[3].id} className="ingrediente__name">{products[0].ingredients[0].itens[3].nm_item}</p>
                <p key={products[0].ingredients[0].itens[3].id} className="ingrediente_value">{products[0].ingredients[0].itens[3].vl_item}</p>
              </div>
              <div className="adicao__ingrediente">
                <button onClick={() => setMolhoPicanha(prevCount => prevCount - 1)}>
                  <img src={sinalMenos} alt="" />
                </button>
                <p>{molhoPicanha}</p>
                <button onClick={() => setMolhoPicanha(prevCount => prevCount + 1)}>
                  <img src={sinalMais} alt="" />
                </button>
              </div>
            </div>
            <div className="linha__horizontal"></div>
            <div className="talher">
              <p key={products[0].ingredients[1].group} >{products[0].ingredients[1].group}</p>
            </div>
            <div className="container__talher">
              <div className="adicao__talher">
                <button onClick={() => setTalher(prevCount => prevCount - 1)} className="diminuir__talher">
                  <img src={sinalMenos} alt="" />
                </button>
                <p>{talher}</p>
                <button onClick={() => setTalher(prevCount => prevCount + 1)} className="diminuir__talher">
                  <img src={sinalMais} alt="" />
                </button>
              </div>
              <button className="adicionar">Adicionar</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Ingrediente
