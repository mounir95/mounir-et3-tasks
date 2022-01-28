import { globalStateContext } from '../../contants/UseContext';

const MyList = () => {   
   return (
        <globalStateContext.Consumer>
           { (value : string[] ) => value.map( (e : string, index : number) => { return index === 0?<option value={e} key={e}>{e}</option>:<option key={e} value={e}>{e}</option> } )}
        </globalStateContext.Consumer>
   );
}
export  default MyList;