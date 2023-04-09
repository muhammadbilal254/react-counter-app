import React, { useState } from "react"
// import { Dinner } from "./components/dinner"
import Counter from "./components/counter";
import "./App.css"

function App() {

  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false)

  return (
    <>
      <div className={`main-box ${isDark ? "dark-mode" : ""}`}>
        <button onClick={() => { setIsDark(!isDark) }} className="toggle-btn">change to {!isDark ? "Dark" : "Light"}</button>

        <Counter count={count} />
        <button onClick={() => { setCount(count + 1) }}>Increment</button>
        <button onClick={() => { setCount(count > 0 ? count - 1 : 0) }}>Decrement</button>



      </div>
    </>
  );
}


export default App;