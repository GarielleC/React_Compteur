import { useState } from 'react';
import './Compteur.scss';

function Counter() {
  // Utilisez useState de manière appropriée en déstructurant le tableau
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className='compteur'>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>
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