import '../App.css';
import Banner from './Banner';
import QuestionForm from './QuestionForm';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import Cart from './Cart';
import { useState } from 'react';

function App() {

  const [cart, updateCart] = useState([])

  return (
    <div className="App" >
      <header className="App-header">
        <Banner />
      <div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>

        <Footer />

      </header>
    </div>
  );
}

export default App;
