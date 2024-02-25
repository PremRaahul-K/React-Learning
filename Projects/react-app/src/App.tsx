import { useState } from "react";
import { produce } from "immer";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["cheese", "jalapenos"],
  });
  const handleClick = () => {
    //setPizza({ ...pizza, toppings: [...pizza.toppings, "pepperoni"] });
    setPizza(
      produce((draft) => {
        draft.toppings.push("pepperoni");
      })
    );
  };
  return (
    <div>
      <h1>{pizza.name}</h1>
      <ul>
        {pizza.toppings.map((topping, index) => (
          <li key={index}>{topping}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default App;
