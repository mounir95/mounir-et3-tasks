import { globalStateContext } from '../../../contants/UseContext';

const SelectListFilter = () => {   
   return (
        <globalStateContext.Consumer>
           { (value : string[] ) => value.map( (e : string, index : number) => { 
              return <option key={e} value={e}>{e}</option> } )}
        </globalStateContext.Consumer>
   );
}
export  default SelectListFilter;