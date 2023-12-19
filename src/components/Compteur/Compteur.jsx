import { useState } from 'react';
import './Compteur.scss';

function Counter() {
  // Utilisation du useState en déstructurant le tableau
  const [count, setCount] = useState(0);

  // On incrémente au compteur en faisant + 1
  const increment = () => {
    setCount(count + 1);
  };

  // Réinisitailation du compteur
  const reset = () => {
    setCount(0);
  };

  return (
    <div className='compteur'>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={reset}>Réinitialiser</button>
    </div>
  );
}

export default Counter;


// import {useState} from 'react'

// function Counter() {
//   const [count, SetCount] = useState;

//     return (
//       <div>
//         <h1>Le compteur est à : {count}</h1>
//         <button onClick= {() => SetCount(count +1 )}>Incrémentez</button>
      
//       </div>
//     )
//   }
  
//   export default Counter