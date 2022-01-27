import React, {FC} from "react";
import { globalStateContext } from "../../contants/UseContext";

interface Props {
    inputHandeler:any,
}

const MyInput :FC<Props> = ({ inputHandeler }) => {

// here ex: value = 'my comment' which is the initial comment at the context page we leave it value=comment instead of
// React.useContext(globalStateContext).comment ,because we need to change the value of the inoput inbstead of the 
// place holder. value in this example will be for example value = 'my changed comment';

// why if we write here as input React.useContext(globalStateContext).comment instead of comment it will not work ?

    return (
        <globalStateContext.Consumer>
          { (value : string) =>  <input 
          className="input_textfield"
           type="text"
        //    value={ value }
        //    placeholder={ value }
           onChange={( value ) => inputHandeler( value )} required/> }
        </globalStateContext.Consumer>
    )
}
export default MyInput;