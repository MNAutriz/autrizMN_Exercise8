// Import necessary modules and components
import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM library for rendering
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing CSS styles for the index

// Create a root element using ReactDOM.createRoot method and target the element with id 'root'
// Render the main App component inside a StrictMode component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Render the main App component */}
  </React.StrictMode>,
);
