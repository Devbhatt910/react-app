import { useContext } from "react";

import GrandChildContext from "./GrandChildContext";
import { UserObjContext } from "../../../App";

const ChildContext = () => {

  const { name , email , phone } = useContext(UserObjContext);

  return(
    <>
    <h4 style={{color:'orange'}}>{name}</h4>
    <h4 style={{color:'orange'}}>{email}</h4>
    <h4 style={{color:'orange'}}>{phone}</h4>
    <GrandChildContext />
    </>
  );
};

export default ChildContext;
