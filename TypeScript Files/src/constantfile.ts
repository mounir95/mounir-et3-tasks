import { Myconstants, MyStrings, ArrayValue, size, value, price } from './enum.d'
import { IPropertyofsize } from './enum.d'

const constants = () : [Required<IPropertyofsize>,
                        Required<IPropertyofsize>,
                        Required<IPropertyofsize>,
                        Myconstants.bagprice,
                        Myconstants.currency,
                        number,
                        number[]] => {
    const largeboxobject : IPropertyofsize = {size:size.large,value:value.large,price:price.large};
    const mediumboxobject : IPropertyofsize  = {size:size.medium,value:value.medium,price:price.medium};
    const smallboxobject : IPropertyofsize  = {size:size.small,value:value.small,price:price.small};
    const orderId : Required<number> = Myconstants.one;
    const valuesarray : number[] = [ArrayValue.first,ArrayValue.second,ArrayValue.third,ArrayValue.forth,ArrayValue.fifth,ArrayValue.six,ArrayValue.seven,ArrayValue.eight];
    return [
        largeboxobject,
        mediumboxobject,
        smallboxobject,
        Myconstants.bagprice,
        Myconstants.currency,
        orderId,
        valuesarray
    ];
}
export default constants