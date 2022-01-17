import constants from './constantfile';
import { Iboxarray } from './enum.d';

let [largeboxobject,mediumboxobject,smallboxobject,bagprice,currency,orderId] = constants();

let boxesarrayfun = (par:number) : Required<Iboxarray[]>  => {
    var boxesarray:Required<Iboxarray[]> =[];
    const arrayoflargeobject :Required<Iboxarray> = {size:largeboxobject.size,numbers_of_Bags: largeboxobject.value * parseInt(String(par / largeboxobject.value)), price_of_Boxes:largeboxobject.price * parseInt(String(par / largeboxobject.value)),quantity_of_Size : parseInt(String(par / largeboxobject.value))};
    boxesarray.push(arrayoflargeobject);
    par = par % largeboxobject.value;
    const arrayofmediumobject : Required<Iboxarray> = {size:mediumboxobject.size,numbers_of_Bags: mediumboxobject.value * parseInt(String(par / mediumboxobject.value)), price_of_Boxes:mediumboxobject.price * parseInt(String(par / mediumboxobject.value)),quantity_of_Size : parseInt(String(par / mediumboxobject.value))};
    boxesarray.push(arrayofmediumobject);
    par = par % mediumboxobject.value;
    if(par > smallboxobject.value) {
        const arrayofsmallobject : Required<Iboxarray> = {size:smallboxobject.size,numbers_of_Bags: par, price_of_Boxes:smallboxobject.price * 2,quantity_of_Size : 2};
        boxesarray.push(arrayofsmallobject);
    }
    else if (par > 0){
        const arrayofsmallobject : Required<Iboxarray> = {size:smallboxobject.size,numbers_of_Bags:  par, price_of_Boxes:smallboxobject.price * 1,quantity_of_Size : 1};
        boxesarray.push(arrayofsmallobject);
    }
    else{
        const arrayofsmallobject : Required<Iboxarray> = {size:smallboxobject.size,numbers_of_Bags:  par, price_of_Boxes:smallboxobject.price * par,quantity_of_Size : par};
        boxesarray.push(arrayofsmallobject);
    }
    return boxesarray;
}
export default boxesarrayfun;