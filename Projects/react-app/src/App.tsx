import { useState } from "react";
import { produce } from "immer";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, name: "Shoes", price: 50, qty: 1 },
      { id: 2, name: "Shirt", price: 20, qty: 1 },
    ],
  });
  const handleClick = () => {
    // setCart({
    //   ...cart,
    //   items: cart.items.map((item) =>
    //     item.id === 1 ? { ...item, qty: item.qty + 1 } : item
    //   ),
    // });
    setCart(
      produce((draft) => {
        draft.items.map((item) => (item.id === 1 ? item.qty++ : item.qty));
      })
    );
  };
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - {item.qty}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default App;
