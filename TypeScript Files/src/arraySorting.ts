import _sortBy from 'lodash/sortBy';
import _orderBy from 'lodash/orderBy';
import { MyStrings, TObjectArray } from './enum.d'

let arraySorting = (finalArrayObject : Required<TObjectArray[]>) :Required<TObjectArray[]> => {
    finalArrayObject = _sortBy(finalArrayObject, 'totalOrderPrice');
    const sortedbytotalOrderPricearray : number[]= _orderBy(finalArrayObject,['totalOrderPrice'],['asc'])
                            .map((e): Pick<TObjectArray, "totalOrderPrice"> => {return e = e.totalOrderPrice;});
    console.log(MyStrings.partC);
    console.log(sortedbytotalOrderPricearray);  // bring the array of object for totalOrderPrice above 280$
    return finalArrayObject;
}
export default arraySorting;