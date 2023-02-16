import Article from './Article';

function Cart() {
    return (
      <div>
        <ul>
          <Article name="monstera" price='8'/>
          <Article name="lierre" price='10'/>
          <Article name="bouquet de fleurs" price='15'/>
        </ul>
      </div>
    )
  }

  export default Cart