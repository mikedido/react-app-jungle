import PlantItem from './PlantItem';
import '../styles/ShoppingList.css';
import { plantList } from '../datas/plantList';

function ShoppingList({ cart, updateCart }) {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		console.log(name);
		console.log(price);

		let currentPlantExist = cart.find((element) => element.name === name );

		if (currentPlantExist) {
			let newCart = cart.filter((element) => {
				if (element.name === name) {
					element.amount ++;
				}
			})
			updateCart([...newCart])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div>
			<ul>
				{categories.map((category) => (
					<li key={category}>{category}</li>
				))}
			</ul>
			<ul  className='lmj-plant-list'>
				{plantList.map(({id, cover, name, water, light, price}) => (
                    <div>
						<PlantItem
							key={id}
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price) }>Ajouter</button>
					</div>
					
				))}
			</ul>
		</div>
	)
}

export default ShoppingList