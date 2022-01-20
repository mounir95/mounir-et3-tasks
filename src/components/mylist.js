import React from 'react';
import { globalStateContext } from '../myconstants/themeContext'
// globalStateContext.conumer will provide the child with the value sent by the parent.
// | attribute of the state decalred in the parent)
// moreover the prop send by the parent (clickHandler)will be as an input to the child function 
// instead of this.prop.propname, and this function can have an input as we can see below.

const MyList = () => {   

// here ex: value = React.useContext(globalStateContext).SE_list, because we are changing the se_list value in the parent
// and so at the input displayed the value of se_list that is choosed from the array and not the whole list array.
// value in this example is value = ['AH', 'BH', 'hg'];

   return (
        <globalStateContext.Consumer>
            {/* {value => value.map(e => <button onClick={() => clickHandler(e)} >{e}</button>) } */}
            {/* <select name="carBrand">{ value => value.map( e => <option value={e}>{e}</option> ) }</select> */}

            { value => value.map( (e, index) => { return index === 0?<option value={e} selected>{e}</option>:<option value={e}>{e}</option> } )}
        </globalStateContext.Consumer>
   );
}
export  default MyList;