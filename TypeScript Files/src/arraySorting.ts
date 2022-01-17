import _sortBy from 'lodash/sortBy';
import _orderBy from 'lodash/orderBy';
import { MyStrings, Iobjectarray } from './enum.d'

let arraySorting = (finalArrayObject : Required<Iobjectarray[]>) :Required<Iobjectarray[]> => {
    finalArrayObject = _sortBy(finalArrayObject, 'totalOrderPrice');
    const sortedbytotalOrderPricearray : number[]= _orderBy(finalArrayObject,['totalOrderPrice'],['asc'])
                            .map((e): Pick<Iobjectarray, "totalOrderPrice"> => {return e = e.totalOrderPrice;});
    console.log(MyStrings.partC);
    console.log(sortedbytotalOrderPricearray);  // bring the array of object for totalOrderPrice above 280$
    return finalArrayObject;
}
export default arraySorting;