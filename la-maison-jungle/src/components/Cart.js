import Article from './Article';
import '../styles/Cart.css';
import { useState } from 'react';


/*function Cart() {

  const [cart, updateCart] = useState(0)

    return (
      <div className='lmj-cart'>
        <h2> Mon Panier</h2>
        <ul>
          <Article name="monstera" price='8'/>
          <Article name="lierre" price='10'/>
          <Article name="bouquet de fleurs" price='15'/>
        </ul>
      </div>
    )
  }*/

  function Cart({ cart, updateCart }) {

    const monsteraPrice = 8
    const [isOpen, setIsOpen] = useState(true)
 
    return isOpen ? (
        <div className='lmj-cart'>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            <h3>Total : {monsteraPrice * cart}€</h3>
            <button onClick={() => updateCart(0)}>
                    Vider le panier
                </button>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    )
}

  export default Cart