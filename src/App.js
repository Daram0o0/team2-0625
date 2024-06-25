import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  const handleAdd = () => {
    if(num >= 0 && num <= 100){
      setNum(num + 2); 
    }
  }
  return (
    <div className="App">
      <div>
        <p>{num}</p>
      </div>
      <div className="calculate">
        <button onClick={handleAdd}>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
      </div>
    </div>
  );
}
export default App;
