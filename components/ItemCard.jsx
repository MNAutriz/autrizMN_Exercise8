// Import React library
import React from 'react';

// Define functional component ItemCard which takes props
const ItemCard = (
    { 
        imageUrl, // Image URL of the product
        altText, // Alternative text for the image
        buttonText, // Text to display on the button
        itemName, // Name of the item
        price, // Price of the item
        addToCart // Function to add the item to the cart
    }) => {

  // Function to handle adding item to the cart
  const handleAddToCart = () => {
    // Call addToCart function with item name and price as arguments
    addToCart(itemName, price);
  };

  // Render the item card component
  return (
    <div className="item-card"> {/* Container for the item card */}
      <img src={imageUrl} alt={altText} /> {/* Display image of the product */}
      <div className="card-label"> {/* Container for product information */}
        <p className='product-name'>{itemName}</p> {/* Display product name */}
        <p>{price}</p> {/* Display product price */}
      </div>
      <button onClick={handleAddToCart}>{buttonText}</button> {/* Button to add item to cart */}
    </div>
  );
}

export default ItemCard; // Export ItemCard component as default
