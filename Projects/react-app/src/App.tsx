import Button from "./components/Button";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      {alert && <Alert onClose={() => setAlert(false)}>My alert</Alert>}
      <Button color="primary" onClick={() => setAlert(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
