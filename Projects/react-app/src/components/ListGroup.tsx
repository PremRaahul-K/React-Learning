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
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item">{item}</li>
      ))}
    </ul>
  );
}

export default ListGroup;
