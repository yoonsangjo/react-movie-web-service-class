import React from 'react';
import Food from './Food';
import foodILike from './foodLike';

function App() {
  return (
    <>
      {foodILike.map((dish) => {
        return <Food key={dish.id} name={dish.name} poster={dish.image} rating={dish.rating} />;
      })}
    </>
  );
}

export default App;
