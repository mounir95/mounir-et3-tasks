import React, {FC} from "react";
import { globalStateContext } from "../../../contants/UseContext";

interface Props {
    inputHandeler:Function,
}

const TextInput :FC<Props> = ({ inputHandeler }) => {
    return (
        <globalStateContext.Consumer>
          { (value : string) =>  <input 
          className="input_textfield"
           type="text"
           onChange={( value : React.ChangeEvent<HTMLInputElement>) => inputHandeler( value )} required/> }
        </globalStateContext.Consumer>
    )
}
export default TextInput;