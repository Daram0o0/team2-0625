import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  const handleDivide = () => {
    const newNum = num / 2;
    setNum(newNum);
  };

  return (
    <div className="App">
      <div>
        <p>{num}</p>
      </div>
      <div className="calculate">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button onClick={handleDivide}>/</button>
      </div>
    </div>
  );
}

export default App;
