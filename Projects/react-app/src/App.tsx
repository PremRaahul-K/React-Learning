import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";

function App() {
  const items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];
  return (
    <div>
      <ListGroup
        items={items}
        heading="Miami"
        onSelectItem={(item) => console.log("Selected item: ", item)}
      />
    </div>
  );
}

export default App;
