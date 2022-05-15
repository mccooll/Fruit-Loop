import React from 'react';
import './App.css';

function App() {
  // Here is an array
  const fruit =["Apples","Pears","Cherries","Grapes","Orange","Banana","Blueberries","Lemon","Mango","Papaya","Pineapple","Watermelon","Cantalope","Honeydew"];
  /*
    Using React, write a function that will:
    
      Take the fruit array as an argument

      Sort the fruit alphabetically (don't forget to make a copy of the array so you don't modify the original. Look up the array spread operator)

      Map over each fruit and append a list item with the name of a fruit inside of it

      Finally use JSX to dump your html into the unordered list below

      BONUS 1: Highlight clicked fruit list item.

      BONUS 2: When you click a fruit, it should be removed from the list
  */
  
  return (
    <main>
      <ul class="fruits">
        {/*Nothing here, use javascript to embed the list items*/}
    </ul>
    </main>
  );
}

export default App;