# React

- To create the react project with help of vite we can use this command `npm create vite@latest`
  In the place of `latest` you use any specific required version

- To install the npm packages we need to use this command `npm install`

- To run the react project we can use `npm run dev`

- To install and import the bootstrap package we can use this commands
  `npm install bootstrap`
  `import "bootstrap/dist/css/bootstrap.css";`

- We can use fragment tag to wrap the component insted of div tag
  `<></>`

  ```Javascript
  function ListGroup() {
  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
      </ul>
    </Fragment>
  );
  }
  ```

- We can use the map function to render all the elements of the list in react

```JavaScript
function ListGroup() {
  const items = [
    "India",
  ];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item">{item}</li>
      ))}
    </ul>
  );
}
```

- We can use ternary operator or conditional rendering to render the items based on the condition

```Javascript
function ListGroup() {
  const items = [
    "India",
  ];
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}
```

- We can handle the click event in react using onClick = {}

```JavaScript
import { MouseEvent } from "react";

function ListGroup() {
  const items = [
    "India",
  ];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
```

- We can use useState in react to update the state of the component based on any action or an event

```JavaScript
import { useState } from "react";

function ListGroup() {
  const items = [
    "India",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
```

- In react we can pass data dynamically with the help of props

```JavaScript
import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "Biriyani",
  ];
  return (
    <div>
      <ListGroup items={items} heading="Foods" />
    </div>
  );
}

export default App;
```

```JavaScript
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

```

```JavaScript

```
