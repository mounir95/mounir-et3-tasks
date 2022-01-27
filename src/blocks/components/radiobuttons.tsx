import React from "react";
import { globalStateContext } from '../../contants/UseContext';

interface Props {
    choosebutton: (e: string) => void

}

const RadioButton :React.FC<Props> = ( { choosebutton }) => {

    return (
        <globalStateContext.Consumer>
            {(value : string)=>
                <div>
                    <label> 
                        <input
                            type="radio"
                            value="no"
                            checked={ value ==="no" }
                            onChange={(e : React.ChangeEvent<HTMLInputElement> | any ="no") : void => choosebutton(e)}
                        />no
                    </label>
                    <label> 
                        <input
                            type="radio"
                            value="yes"
                            checked={ value ==="yes" }
                            onChange={(e : React.ChangeEvent<HTMLInputElement> | any="yes") => choosebutton(e)}
                        />yes
                    </label>
                </div>
            }
        </globalStateContext.Consumer>
    )
}
export default RadioButton;