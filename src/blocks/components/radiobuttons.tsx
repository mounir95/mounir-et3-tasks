import React from "react";
import { globalStateContext } from '../../contants/UseContext';

interface Props {
    choosebutton: (e: React.ChangeEvent<HTMLInputElement>) => void
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
                            onChange={(e : React.ChangeEvent<HTMLInputElement>) : void => choosebutton(e)}
                        />no
                    </label>
                    <label> 
                        <input
                            type="radio"
                            value="yes"
                            checked={ value ==="yes" }
                            onChange={(e : React.ChangeEvent<HTMLInputElement>) => choosebutton(e)}
                        />yes
                    </label>
                </div>
            }
        </globalStateContext.Consumer>
    )
}
export default RadioButton;