import { UserContext } from "../App";
import React,{useContext} from "react";
function ComponentF(){
    const user = useContext(UserContext)
    return(
        <div>
            everything about miss {user}
        </div>
    )
}
export default ComponentF