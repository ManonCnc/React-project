import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem';
import Categories from './Categories';
import { useState } from 'react';

function ShoppingList({ categorie, setCategorie, cart, updateCart }) {


    function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}



    return (
        <div>
            <Categories categorie={categorie} setCategorie={setCategorie}/>
            


            <ul className='lmj-plant-list'>
            {plantList.map(({ id, cover, name, water, light, price, category }) =>
            {
                if (categorie.toString() === category ||  categorie.toString()=== 'all'){                    
                    return(
                    <div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
                    )
                }
                return [];
            }
            
                
				)}
            </ul>
        </div>
        
    )
}

export default ShoppingList