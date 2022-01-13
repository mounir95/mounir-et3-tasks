import _sortBy from 'lodash/sortBy';
import _orderBy from 'lodash/orderBy';

let arraySorting = (finalArrayObject) => {
    // finalArrayObject = _.orderBy(finalArrayObject, ['totalOrderPrice'],['asc']);
    finalArrayObject = _sortBy(finalArrayObject, 'totalOrderPrice');
    const sortedbytotalOrderPricearray = _orderBy(finalArrayObject,['totalOrderPrice'],['asc'])
                            .map(e=> {return e = e.totalOrderPrice;});
    console.log("///////////////////    Part C :    ///////////////////");
    console.log(sortedbytotalOrderPricearray);  // bring the array of object for totalOrderPrice above 280$
    return finalArrayObject;
}
module.exports = arraySorting;