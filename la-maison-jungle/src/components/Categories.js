import React from 'react';
import { plantList } from '../datas/plantList'

function Categories({categorie, setCategorie}) {


    const list= [];
    plantList.forEach(element => list.push(element.category))
    const listCategories = Array.from(new Set(list));

        
        return (
            <div>
            <select value={categorie} onChange={e => {
            const options = [...e.target.selectedOptions];
            const values = options.map(option => option.value);
            setCategorie(values);
          }}>
                <option key='all' value="all">Toutes les Categories</option>
                {listCategories.map((categorie, index) => (
                    <option key={`${categorie}+${index}`}>{ categorie }</option>
                ))}
            </select>
            <button onClick={()=>setCategorie('all')}> Réinitialiser</button>
            
       </div>
        );

    
}
export default Categories