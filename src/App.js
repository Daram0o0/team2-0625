import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  const handleMinus = () => {
    if (0 <= num - 2 && num - 2 <= 100) setNum(num - 2);
    else alert("더 이상 연산할 수 없습니다.");
  };
  
  const multiple = () => {
    if (num > 0 && num <= 50) {
      setNum(num * 2);
    } else {
      alert("*버튼을 실행할 수 없습니다.");
    }


  const handleAdd = () => {
    if(num >= 0 && num <= 100){
      setNum(num + 2); 
    }
  }

  const handleDivide = () => {
    if (num <= 0) return;
    else if (num > 100) return;
    const newNum = num / 2;
    setNum(newNum);
  };

  return (
    <div className="App">
      <div>
        <p>{num}</p>
      </div>
      <div className="calculate">
        <button onClick={handleAdd}>+</button>
        <button onClick={handleMinus}>-</button>
        <button onClick={multiple}>x</button>
        <button onClick={handleDivide}>/</button>
      </div>
    </div>
  );
}
export default App;
