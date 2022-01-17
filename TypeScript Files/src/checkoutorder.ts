import { TObjectArray } from './enum.d';
import displayfun from './displayfunc';

/////////// CHECKOUT ORDER //////////////////////
let checkoutorder =(finalArrayObject: Required<TObjectArray[]>) => {
    console.log(displayfun(finalArrayObject,'$'));
};

export default checkoutorder;