function ListGroup() {
  const items = [
    "India",
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Germany",
    "France",
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

export default ListGroup;
