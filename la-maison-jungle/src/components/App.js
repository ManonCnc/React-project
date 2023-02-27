import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.svg'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/App.css'

function App() {
	//const [cart, updateCart] = useState([])
  const [categorie, setCategorie] = useState('all')

  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart categorie={categorie} setCategorie={setCategorie} cart={cart} updateCart={updateCart} />
				<ShoppingList categorie={categorie} setCategorie={setCategorie}  cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App;
