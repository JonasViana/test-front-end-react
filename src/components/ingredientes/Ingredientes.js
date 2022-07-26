import { React, useState } from 'react'

import axios from 'axios'

import '../ingredientes/Ingredientes.css'

import sinalMenos from '../ingredientes/images/sinal-menos.png'

import sinalMais from '../ingredientes/images/sinal-mais.png'

export default class Ingredientes extends React.Component {
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
      <div className="borda__ingredientes">
        <div className="adicionar__ingrediente">
          <p className="adicionar__ingredientes">Adicionar ingredientes</p>
          <p className="maxIngredientes">Até 8 ingredientes</p>
        </div>
        <div className="ingrediente">
          <div className="valor__ingrediente">
            <p className="ingrediente__name">
              {this.state.food.map(
                food => food.ingredients[0].itens[0].nm_item
              )}
            </p>
            <p className="ingrediente_value">
              + R$
              {this.state.food.map(
                food => food.ingredients[0].itens[0].vl_item
              )}
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
              {this.state.food.map(
                food => food.ingredients[0].itens[1].nm_item
              )}
            </p>
            <p className="ingrediente_value">
              + R$
              {this.state.food.map(
                food => food.ingredients[0].itens[1].vl_item
              )}
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
              {this.state.food.map(
                food => food.ingredients[0].itens[2].nm_item
              )}
            </p>
            <p className="ingrediente_value">
              + R$
              {this.state.food.map(
                food => food.ingredients[0].itens[2].vl_item
              )}
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
              {this.state.food.map(
                food => food.ingredients[0].itens[3].nm_item
              )}
            </p>
            <p className="ingrediente_value">
              + R$
              {this.state.food.map(
                food => food.ingredients[0].itens[3].vl_item
              )}
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
          <p>Precisa de talher?</p>
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
    )
  }
}
