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
  const handleSelect = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup items={items} heading="Foods" onSelectItem={handleSelect} />
    </div>
  );
}

export default App;
