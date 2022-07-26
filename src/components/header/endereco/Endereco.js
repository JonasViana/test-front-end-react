import React from 'react'
import "../endereco/Endereco.css"
import seta from "./images/seta.png"

const endereco = () => {
    return (
        <div className='select__entrega'>
            <div className='entrega'>
                <p>Entrega :</p>
                <p>Endereço</p>
            </div>
           <img src={seta} alt="seta" className='seta' />
        </div>
    )
}

export default endereco