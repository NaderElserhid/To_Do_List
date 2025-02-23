import { useState, React } from "react";
import List from "./List";

function ToggleTheme() {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  const getItems = () => {
    return [number, number + 1, number + 2];
  };
  return (
    <>
      <input
        value={number}
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
      <List getItems={getItems}></List>
    </>
  );
}

export default ToggleTheme;
