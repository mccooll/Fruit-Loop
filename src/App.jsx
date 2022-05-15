import React, {useState} from 'react';
import './App.css';

function App() {

  const [highlightedIndex,setHighlightIndex] = useState(null);
  
  // Here is an array
  const fruit =["Apples","Pears","Cherries","Grapes","Orange","Banana","Blueberries","Lemon","Mango","Papaya","Pineapple","Watermelon","Cantalope","Honeydew"];

  const sortFruit = fruit => {
    const newFruit = [...fruit];
    newFruit.sort();
    return newFruit;
  }

  const sortedFruit = sortFruit(fruit);
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
        {
          /* Use javascript to embed the list items */
          sortedFruit.map((f,i) => <li onClick={()=>setHighlightIndex(i)} style={{color:i===highlightedIndex ? 'red': 'black'}}>{f}</li>)
        }
    </ul>
    </main>
  );
}

export default App;