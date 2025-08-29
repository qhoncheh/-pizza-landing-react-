import { useEffect, useState } from "react";
import Message from "./Message";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
    console.log("first", getAdvice) 
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div> 
      <h1>{advice}</h1>
      <button onClick={getAdvice}>click here !</button>
      <Message count={count} />
    </div>
  );
}


