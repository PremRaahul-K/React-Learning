import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "Biriyani",
    "Pasta",
    "Pizza",
    "Burger",
    "Noodles",
    "Ice Cream",
  ];
  return (
    <div>
      <ListGroup items={items} heading="Foods" />
    </div>
  );
}

export default App;
