import React from 'react';

//This also permits the navigation button for the Lazado app.
const NavigationButton = ({ name, url }) => {
  return (
    <a href={url} className="nav-button">{name}</a>
  );
}

export default NavigationButton;
