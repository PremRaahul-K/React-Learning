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