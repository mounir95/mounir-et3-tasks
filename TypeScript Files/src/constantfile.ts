import { Myconstants, Tcontant, MyStrings, ArrayValue, size, value, price } from './enum.d'
import { TPropertyofsize } from './enum.d'

const constants = () : Tcontant => {
    const largeboxobject : TPropertyofsize = {size:size.large,value:value.large,price:price.large};
    const mediumboxobject : TPropertyofsize  = {size:size.medium,value:value.medium,price:price.medium};
    const smallboxobject : TPropertyofsize  = {size:size.small,value:value.small,price:price.small};
    const orderId : Required<number> = Myconstants.one;
    const bagprice : Required<number> = Myconstants.bagprice;
    const currency : Required<string> = Myconstants.currency;
    const valuesarray : number[] = [ArrayValue.first,ArrayValue.second,ArrayValue.third,ArrayValue.forth,ArrayValue.fifth,ArrayValue.six,ArrayValue.seven,ArrayValue.eight];
    return {
        largeboxobject,
        mediumboxobject,
        smallboxobject,
        bagprice,
        currency,
        orderId,
        valuesarray
    };
}
export default constants