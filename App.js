// Importing necessary modules and components
import { useState } from 'react'; // Importing useState hook from React
import './App.css'; // Importing CSS styles for the App component
import NavigationButton from './components/NavigationButton'; // Importing NavigationButton component
import ItemCard from './components/ItemCard'; // Importing ItemCard component
import products from './components/products'; // Importing product data
import menus from './components/menus'; // Importing menu data

// Define the main functional component App
function App() {
  // Define state variables using the useState hook
  const [pushcarts, setPushcarts] = useState([]); // State for cart items
  const [message, setMessage] = useState(''); // State for messages to be displayed

  // Function to add an item to the cart
  const addToCart = (itemName, price) => {
    // Create a new array with the updated cart items
    const updatedPushcarts = [...pushcarts, { itemName, price }];
    // Log a message indicating the item added to the cart
    console.log(`Added ${itemName} with a price of ${price} to the cart!`);
    // Update the cart items state and display a message
    setPushcarts(updatedPushcarts);
    setMessage(`Added ${itemName} with a price of ${price} to the cart!`);
  };

  // Render the UI elements
  return (
    <div className="app-container"> {/* Main container for the application */}
      <header className="header"> {/* Header section */}
        <h1 className="shop-label">Lazado</h1> {/* Shop label */}
        <nav className="navigation"> {/* Navigation menu */}
          {/* Mapping through menu items and rendering NavigationButton component */}
          {menus.map(menu => (
            <NavigationButton key={menu.id} name={menu.name} url={menu.url} />
          ))}
        </nav>
      </header>
      <div className="item-container"> {/* Container for displaying product items */}
        {/* Mapping through product items and rendering ItemCard component */}
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
      {/* Display message box if there is a message */}
      {message && (
        <div className="message-box">
          <p>{message}</p>
        </div>
      )}
      <footer className="footer"> {/* Footer section */}
        <p>&copy; 2024 Lazado. All rights reserved.</p> {/* Copyright information */}
      </footer>
    </div>
  );
}

export default App; // Export the App component as default
