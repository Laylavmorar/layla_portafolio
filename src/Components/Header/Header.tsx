import CTA from './CTA'
import './Header.css'
import HeaderSocials from './HeaderSocials'
import PC from '../../Img/Me.jpeg'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hola, Mi nombre es</h5>
        <h1>Layla Mora</h1>
        <h5 className='text-light'>Reparacion de computadoras</h5>
        <CTA />
        <div className='me'>
          <img src={PC} alt="me" />
        </div>
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>IR ABAJO</a>
      </div>
    </header>
  )
}

export default Header
