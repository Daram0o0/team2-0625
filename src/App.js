import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  const multiple = () => {
    setNum(num * 2);
  };

  return (
    <div className="App">
      <div>
        <p>{num}</p>
      </div>
      <div className="calculate">
        <button>+</button>
        <button>-</button>
        <button onClick={multiple}>*</button>
        <button>/</button>
      </div>
    </div>
  );
}

export default App;
