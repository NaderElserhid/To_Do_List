import { useContext } from "react";
import { UserContext } from "../App";

function Card() {
  const user = useContext(UserContext);
  return <div>{user.userName}</div>;
}

export default Card;
