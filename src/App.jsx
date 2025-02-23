import { useState, createContext } from "react";
import Card from "./assets/card";
import SelectOne from "./assets/SelectOne";
import ToggleTheme from "./assets/ToggleTheme";

export const UserContext = createContext(null);

function App() {
  const [userName, setUserName] = useState("nadir");
  const userValues = { userName };

  return (
    <UserContext.Provider value={userValues}>
      <Card></Card>
      <SelectOne></SelectOne>
      <ToggleTheme></ToggleTheme>
    </UserContext.Provider>
  );
}

export default App;
