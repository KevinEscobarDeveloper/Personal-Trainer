import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routing } from "./assets/router/Routing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Load routes configuration */}
      <Routing />
    </>
  );
}

export default App;
