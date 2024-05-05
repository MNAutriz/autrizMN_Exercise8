import { useState } from 'react';
import './App.css';
import NavigationButton from './components/NavigationButton';
import ItemCard from './components/ItemCard';
import products from './components/products';
import menus from './components/menus';

function App() {
  const [pushcarts, setPushcarts] = useState([]);
  const [message, setMessage] = useState('');

  const addToCart = (itemName, price) => {
    const updatedPushcarts = [...pushcarts, { itemName, price }];
    console.log(`Added ${itemName} with a price of ${price} to the cart!`);
    setPushcarts(updatedPushcarts);
    setMessage(`Added ${itemName} with a price of ${price} to the cart!`);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="shop-label">Lazado</h1>
        <nav className="navigation">
          {menus.map(menu => (
            <NavigationButton key={menu.id} name={menu.name} url={menu.url} />
          ))}
        </nav>
      </header>
      <div className="item-container">
        {products.map(product => (
          <ItemCard
            key={product.id}
            imageUrl={product.image}
            altText={product.name}
            buttonText="Add to Cart"
            itemName={product.name}
            price={`$${product.price}`}
            addToCart={addToCart}
          />
        ))}
      </div>
      {message && (
        <div className="message-box">
          <p>{message}</p>
        </div>
      )}
      <footer className="footer">
        <p>&copy; 2024 Lazado. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
