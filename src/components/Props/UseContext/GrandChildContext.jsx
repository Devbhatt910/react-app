import { useContext } from "react";

import { UserContext } from "../../../App";

const GrandChildContext = () => {
  const user = useContext(UserContext);
  return <div>GrandChildContext: {user}</div>;
};

export default GrandChildContext;
