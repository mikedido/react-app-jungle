import '../styles/Cart.css';
import { useState } from 'react';

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce((sum, element) => sum + element.price, 0);
	//const total = 0;
	console.log(cart);

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<ul>
				{cart.map( ({name, price, amount}) => (
					<div>{name} {price}€ x {amount}</div>
				))}
			</ul>
			<h3>Total : {total} €</h3>
			<button onClick={() => updateCart([])}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart;