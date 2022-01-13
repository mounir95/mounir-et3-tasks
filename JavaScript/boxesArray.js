import constants from './constantfile';
let [largeboxobject,mediumboxobject,smallboxobject,bagprice,currency,orderId] = constants();

let boxesarrayfun = (par) => {
    const boxesarray = [];
    const arrayoflargeobject = {size:largeboxobject.size,numbers_of_Bags: largeboxobject.value * parseInt(par / largeboxobject.value), price_of_Boxes:largeboxobject.price * parseInt(par / largeboxobject.value),quantity_of_Size : parseInt(par / largeboxobject.value)};
    boxesarray.push(arrayoflargeobject);
    par = par % largeboxobject.value;
    const arrayofmediumobject = {size:mediumboxobject.size,numbers_of_Bags: mediumboxobject.value * parseInt(par / mediumboxobject.value), price_of_Boxes:mediumboxobject.price * parseInt(par / mediumboxobject.value),quantity_of_Size : parseInt(par / mediumboxobject.value)};
    boxesarray.push(arrayofmediumobject);
    par = par % mediumboxobject.value;
    if(par > smallboxobject.value) {
        const arrayofsmallobject = {size:smallboxobject.size,numbers_of_Bags: par, price_of_Boxes:smallboxobject.price * 2,quantity_of_Size : 2};
        boxesarray.push(arrayofsmallobject);
    }
    else if (par > 0){
        const arrayofsmallobject = {size:smallboxobject.size,numbers_of_Bags:  par, price_of_Boxes:smallboxobject.price * 1,quantity_of_Size : 1};
        boxesarray.push(arrayofsmallobject);
    }
    else{
        const arrayofsmallobject = {size:smallboxobject.size,numbers_of_Bags:  par, price_of_Boxes:smallboxobject.price * par,quantity_of_Size : par};
        boxesarray.push(arrayofsmallobject);
    }
    return boxesarray;
}
module.exports = boxesarrayfun;