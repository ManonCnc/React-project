import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem';


function CategorieList() {
    const list= [];
    plantList.forEach(element => list.push(element.category))
    const listCategories = Array.from(new Set(list));
    return (
       
        <select>
            {listCategories.map((categorie, index) => (
                <option key={`${categorie}+${index}`}>{ categorie }</option>
            ))}
        </select>
    )
}

function ShoppingList({ cart, updateCart }) {

    return (
        <div>
            <CategorieList />


            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <div>
                    <PlantItem key={plant.id} name={plant.name}  cover={plant.cover} id={plant.id} light={plant.light} water={plant.water} />
                    <button onClick={() => updateCart(cart + 1)}>Ajouter</button>

                    </div>
                    
                ))}
            </ul>
        </div>
        
    )
}

export default ShoppingList