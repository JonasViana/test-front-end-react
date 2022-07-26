import React from 'react'

import axios from 'axios'

import food from '../pedido/images/food.png'

import '../pedido/Pedido.css'

export default class FoodList extends React.Component {
  state = {
    food: []
  }

  componentDidMount() {
    axios
      .get(`https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products`)
      .then(res => {
        const food = res.data
        this.setState({ food })
      })
  }

  render() {
    return (
      // A URL da imagem que vem da API não esta funcionando ERRO 404.
      <div className="food">
        <img src={food} alt="" />
        <h2 className="titulo">
          {this.state.food.map(food => food.nm_product)}
        </h2>
        <p>{this.state.food.map(food => food.description)}</p>
        <div className="valores">
          <h2 className="valor__desconto">
            R${this.state.food.map(food => food.vl_discount)}
          </h2>
          <h2 className="valor">
            R${this.state.food.map(food => food.vl_price)}
          </h2>
        </div>
      </div>
    )
  }
}
