import constants from './constantfile';
import boxesarrayfun from './boxesArray';
import { TObjectArray } from './enum.d'

let {largeboxobject,mediumboxobject,smallboxobject,bagprice,currency,orderId} = constants();

let getArrayObject = (myordernumber ) : Required<TObjectArray> => {
    let order = (par : number) : Required<TObjectArray> => {
        const bagp = bagprice;
        const boxesarray = boxesarrayfun(par);
        const finalobject = {
            orderID : orderId,
            totalNumber : boxesarray.reduce((accumulator, current) => accumulator + (current.numbers_of_Bags), 0),
            totalCoffePrice : boxesarray.reduce((accumulator, current) => accumulator + (current.numbers_of_Bags * bagp), 0),
            totalBagsPrice : boxesarray.reduce((accumulator, current) => (accumulator + current.price_of_Boxes ), 0),
            totalOrderPrice : boxesarray.reduce((accumulator, current) => accumulator + (current.numbers_of_Bags * bagp), 0) + boxesarray.reduce((accumulator, current) => (accumulator + current.price_of_Boxes ), 0)
        };
        orderId++;
        return finalobject;
    }
    return order(myordernumber)
}
export default getArrayObject;
