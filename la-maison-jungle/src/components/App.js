import '../App.css';
import Banner from './Banner';
import QuestionForm from './QuestionForm';
import ShoppingList from './ShoppingList';
import Footer from './Footer';


function App() {

 

  return (
    <div className="App" >
      <header className="App-header">
        <Banner />
        <QuestionForm  />
        <ShoppingList/>
        <Footer />

      </header>
    </div>
  );
}

export default App;
