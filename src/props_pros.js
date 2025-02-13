import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1> Button That updates together </h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onclick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}> clicked {count} time</button>;
}
