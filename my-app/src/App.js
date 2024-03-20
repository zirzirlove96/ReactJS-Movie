import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const isRunoOnlyOne = () => {
    console.log("call the once");
  };
  //useEffect는 2개의 argument를 갖는다.
  //첫번째는 함수를 넣어주면 된다.
  //실제로 console이 처음 redner 될때 한번만 찍힌다.
  useEffect(isRunoOnlyOne, []);
  useEffect(() => {
    if (keyword != "" && keyword.length > 5) {
      console.log("Search for..", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    if (counter != 0) {
      console.log("i run to when button click");
    }
  }, [counter]);
  return (
    <div>
      <h1>Welcome back to React</h1>
      <input type="text" onChange={onChange} />
      <h2>{counter}</h2>
      <Button text="btn" onClick={onClick}></Button>
    </div>
  );
}

export default App;
