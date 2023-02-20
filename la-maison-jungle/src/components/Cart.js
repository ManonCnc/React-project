import Article from './Article';
import '../styles/Cart.css'

function Cart() {
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
  }

  export default Cart