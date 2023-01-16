import CTA from './CTA'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hola, Mi nombre es</h5>
        <h1>Layla Mora</h1>
        <h5 className='text-light'>Reparacion de computadoras</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header
