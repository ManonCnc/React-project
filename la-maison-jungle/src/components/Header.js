import logo from '../assets/leaf+1.png'
import'../styles/Header.css'

function Header() {
    const title = "la maison de la jungle"
      return (
        <div className='lmj-header'>
             <img src={logo} alt='La maison jungle' className='lmj-logo' />
             <h1>{ title.toUpperCase() }</h1>
        </div>
      )
  }

  export default Header