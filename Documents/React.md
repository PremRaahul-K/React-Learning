# React

- To create the react project with help of vite we can use this command `npm create vite@latest`
  In the place of `latest` you use any specific required version

- To install the npm packages we need to use this command `npm install`

- To run the react project we can use `npm run dev`

## Building Components(58m)

### Creating a ListGroup Component

### Fragments

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

### Rendering Lists

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

### Conditional Rendering

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

### Handling Events

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

### Managing State

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

### Passing Data via Props

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

### Passing Functions via Props

- We can pass function as props to make parent get notified when any action is performed in the child component

```JavaScript
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
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
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
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

```Javascript
import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "Biriyani",
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

```

### Passing Children

- We can use children property to pass the data as a prop

```Javascript
interface Props {
  children: string;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

```

```Javascript
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Alert>Hello World!</Alert>
    </div>
  );
}

export default App;

```

- We can use ReactNode to pass Html elements as to children to the component

```Javascript

import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World!</span>
      </Alert>
    </div>
  );
}

export default App;


import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
```

## Styling Components(32m)

### Vanilla CSS

- We can apply vanilla css by creating a css file with the required styles

```JavaScript
import { useState } from "react";
import "./ListGroup.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
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
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
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

```Css
.list-group {
  list-style: none;
  padding: 0;
}
```

### CSS Modules

- We can use the css modules to solve the css conflect issues of overiding

```JavaScript
import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
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

```Css
.listGroup {
  list-style: none;
  padding: 0;
}

.container {
  background-color: yellow;
}
```

### CSS-in-JS

- We can use the styled components package to style the components with help of js
- To use the styled components package we need to install it with the help of npm `npm install styled-components`
- To use the types for the styled components we need to install another package called `npm install @types/styled-components`

```JavaScript
import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 10px 0px;
  background-color: ${(props) => (props.active ? "grey" : "transparent")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items to display</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            key={item}
            active={index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
```

### Inline Styles

- We can also apply inline styling to the elements with help of objects

```JavaScript
import { useState } from "react";
import "./ListGroup.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group" style={{ backgroundColor: "yellow" }}>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
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

### Adding Icons

- We can use react-icons package to add icons to our project

```JavaScript
import { BsCalendar2CheckFill } from "react-icons/bs";

function App() {
  return (
    <div>
      <BsCalendar2CheckFill color="red" size={40} />
    </div>
  );
}

export default App;
```
