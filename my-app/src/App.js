import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  console.log("call the api!!!");
  const isRunoOnlyOne = () => {
    console.log("call the once");
  };
  //useEffect는 2개의 argument를 갖는다.
  //첫번째는 함수를 넣어주면 된다.
  //실제로 console이 처음 redner 될때 한번만 찍힌다.
  useEffect(isRunoOnlyOne, []);
  return (
    <div>
      <h1>Welcome back to React</h1>
      <h2>{counter}</h2>
      <Button text="btn" onClick={onClick}></Button>
    </div>
  );
}

export default App;
