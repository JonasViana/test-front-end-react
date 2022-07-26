import React from 'react'
import '../endereco/Endereco.css'
import seta from './images/seta.png'

const endereco = () => {
  return (
    <div className="select__entrega">
      <div className="entrega">
        <p className="entrega__red">Entrega :</p>
        <p className="entrega__grey">Endereço</p>
      </div>
      <img src={seta} alt="seta" className="seta" />
    </div>
  )
}

export default endereco
