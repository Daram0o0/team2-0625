import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const handleMinus = () => {
    if (0 <= num - 2 && num - 2 <= 100) setNum(num - 2);
    else alert("더 이상 연산할 수 없습니다.");
  };

  return (
    <div className="App">
      <div>
        <p>{num}</p>
      </div>
      <div className="calculate">
        <button>+</button>
        <button onClick={handleMinus}>-</button>
        <button>*</button>
        <button>/</button>
      </div>
    </div>
  );
}

export default App;
