import Banner from './Banner';
import ShoppingList from './ShoppingList';
import Cart from './Cart';
import Footer from './Footer';
import '../styles/App.css'
import { useState } from 'react/cjs/react.development';

function App() {
  const [cart, updateCart] = useState([]);
  
  return (
    <div>
      <Banner/>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart}/> 
        <ShoppingList cart={cart} updateCart={updateCart}/> 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
