import React from 'react';
import { globalStateContext } from '../myconstants/themeContext';

const RadioButton = ( { choosebutton }) => {

    return (
        <globalStateContext.Consumer>
            {value =>
                <div>
                    <label> 
                        <input
                            type="radio"
                            value="no"
                            checked={ value ==="no" }
                            onChange={(e="no") => choosebutton(e)}
                        />no
                    </label>
                    <label> 
                        <input
                            type="radio"
                            value="yes"
                            checked={ value ==="yes" }
                            onChange={(e="yes") => choosebutton(e)}
                        />yes
                    </label>
                </div>
            }
        </globalStateContext.Consumer>
    )
}
export default RadioButton;