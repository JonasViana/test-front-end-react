import React from 'react'
import "../header/Header.css"
import logo1 from './images/DeliverizeLogo1.png'
import logo2 from './images/DeliverizeLogo2.png'
import Endereco from './endereco/Endereco'
import user from './images/user.png'
import carrinho from './images/carrinho.png'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img className='logo1' src={logo1} alt="logo" />
                <img className='logo2' src={logo2} alt="logo" />
            </div>
            <Endereco />
            <input type="text" placeholder='Busque por estabelecimento ou produtos' />
            <div className='user'>
                <img src={user} alt="user" />
                <p>Entrar</p>
            </div>
            <div className='carrinho'>
                <img src={carrinho} alt="carrinho" />
                <p>Carrinho</p>
            </div>
        </div>
    )
}

export default Header