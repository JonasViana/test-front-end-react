import { React, useEffect, useState } from 'react'

import axios from 'axios'

import '../ingredientes/Ingredientes.css'

import sinalMenos from '../ingredientes/images/sinal-menos.png'

import sinalMais from '../ingredientes/images/sinal-mais.png'

const baseURL =
  'https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products'

const Ingrediente = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(baseURL)

      const data = await res.json()

      setProducts(data)
    }

    fetchData()
  }, [])

  console.log(products)

  return (
    <div>
      <div className="borda__ingredientes">
        <div className="adicionar__ingrediente">
          <p className="adicionar__ingredientes">Adicionar ingredientes</p>
          <p className="maxIngredientes">Até 8 ingredientes</p>
        </div>
        <div className="ingrediente">
          <div className="valor__ingrediente">
            <p className="ingrediente__name">
              {products[0].ingredients[0].itens[0].nm_item}
            </p>
            <p className="ingrediente_value">
              + R${products[0].ingredients[0].itens[0].vl_item}
            </p>
          </div>
          <div className="adicao__ingrediente">
            <button>
              <img src={sinalMenos} alt="" />
            </button>
            <p></p>
            <button>
              <img src={sinalMais} alt="" />
            </button>
          </div>
        </div>
        <div className="linha__horizontal"></div>
        <div className="ingrediente">
          <div>
            <p className="ingrediente__name">
              {products[0].ingredients[0].itens[1].nm_item}
            </p>
            <p className="ingrediente_value">
              + R${products[0].ingredients[0].itens[1].vl_item}
            </p>
          </div>
          <div className="adicao__ingrediente">
            <button>
              <img src={sinalMenos} alt="" />
            </button>
            <p>2</p>
            <button>
              <img src={sinalMais} alt="" />
            </button>
          </div>
        </div>
        <div className="linha__horizontal"></div>
        <div className="ingrediente">
          <div>
            <p className="ingrediente__name">
              {products[0].ingredients[0].itens[2].nm_item}
            </p>
            <p className="ingrediente_value">
              + R${products[0].ingredients[0].itens[2].vl_item}
            </p>
          </div>
          <div className="adicao__ingrediente">
            <button>
              <img src={sinalMenos} alt="" />
            </button>
            <p>2</p>
            <button>
              <img src={sinalMais} alt="" />
            </button>
          </div>
        </div>
        <div className="linha__horizontal"></div>
        <div className="ingrediente">
          <div>
            <p className="ingrediente__name">
              {products[0].ingredients[0].itens[3].nm_item}
            </p>
            <p className="ingrediente_value">
              + R${products[0].ingredients[0].itens[3].vl_item}
            </p>
          </div>
          <div className="adicao__ingrediente">
            <button>
              <img src={sinalMenos} alt="" />
            </button>
            <p>2</p>
            <button>
              <img src={sinalMais} alt="" />
            </button>
          </div>
        </div>
        <div className="linha__horizontal"></div>
        <div className="talher">
          <p></p>
        </div>
        <div className="container__talher">
          <div className="adicao__talher">
            <button className="diminuir__talher">
              <img src={sinalMenos} alt="" />
            </button>
            <p>2</p>
            <button className="diminuir__talher">
              <img src={sinalMais} alt="" />
            </button>
          </div>
          <button className="adicionar">Adicionar</button>
        </div>
      </div>
    </div>
  )
}

export default Ingrediente
