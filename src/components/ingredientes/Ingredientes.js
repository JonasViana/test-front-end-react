import React from 'react';

import axios from 'axios';

import '../ingredientes/Ingredientes.css'

import sinalMenos from '../ingredientes/images/sinal-menos.png'

import sinalMais from '../ingredientes/images/sinal-mais.png'


export default class Ingredientes extends React.Component {
    state = {
        food: []
    }

    componentDidMount() {
        axios.get(`https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products`)
            .then(res => {
                const food = res.data;
                this.setState({ food });
            })
    }

    render() {
        return (
            <div>
                <div className='adicionar__ingrediente'>
                    <p className='adicionar'>Adicionar ingredientes</p>
                    <p className='maxIngredientes'>Até 8 ingredientes</p>
                </div>
                <div className='ingrediente'>
                    <div>
                        <p className='ingrediente__name'>
                            {this.state.food.map(food => food.ingredients[0].itens[0].nm_item)}
                        </p>
                        <p className='ingrediente_value'>
                            + R${this.state.food.map(food => food.ingredients[0].itens[0].vl_item)}
                        </p>
                    </div>
                    <div className='adicao__ingrediente'>
                        <img src={sinalMenos} alt="" />
                        <p>2</p>
                        <img src={sinalMais} alt="" />
                    </div>
                </div>
                <div className='ingrediente'>
                    <div>
                        <p className='ingrediente__name'>
                            {this.state.food.map(food => food.ingredients[0].itens[1].nm_item)}
                        </p>
                        <p className='ingrediente_value'>
                            + R${this.state.food.map(food => food.ingredients[0].itens[1].vl_item)}
                        </p>
                    </div>
                    <div className='adicao__ingrediente'>
                        <img src={sinalMenos} alt="" />
                        <p>2</p>
                        <img src={sinalMais} alt="" />
                    </div>
                </div>
                <div className='ingrediente'>
                    <div>
                        <p className='ingrediente__name'>
                            {this.state.food.map(food => food.ingredients[0].itens[2].nm_item)}
                        </p>
                        <p className='ingrediente_value'>
                            + R${this.state.food.map(food => food.ingredients[0].itens[2].vl_item)}
                        </p>
                    </div>
                    <div className='adicao__ingrediente'>
                        <img src={sinalMenos} alt="" />
                        <p>2</p>
                        <img src={sinalMais} alt="" />
                    </div>
                </div>
                <div className='ingrediente'>
                    <div>
                        <p className='ingrediente__name'>
                            {this.state.food.map(food => food.ingredients[0].itens[3].nm_item)}
                        </p>
                        <p className='ingrediente_value'>
                            + R${this.state.food.map(food => food.ingredients[0].itens[3].vl_item)}
                        </p>
                    </div>
                    <div className='adicao__ingrediente'>
                        <img src={sinalMenos} alt="" />
                        <p>2</p>
                        <img src={sinalMais} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}