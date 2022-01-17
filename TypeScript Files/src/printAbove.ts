import _filter  from'lodash/filter';
import { MyStrings, Iobjectarray } from './enum.d';

let printAbove = (finalArrayObject :Required<Iobjectarray[]>,above : number) :number[] => {
    console.log(MyStrings.partD);
    let costabove :number []= _filter(finalArrayObject,element => element.totalOrderPrice > above)
    .map(e=> {return e=e.totalOrderPrice;}); // for array with all total cost property only
    return costabove;
}

export default printAbove;