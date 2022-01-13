import _filter  from'lodash/filter';

let printAbove = (finalArrayObject,above) => {
    let costabove = [];
    console.log("///////////////////    Part D :    ///////////////////");
    costabove = _filter(finalArrayObject,element => element.totalOrderPrice > above)
    .map(e=> {return e=e.totalOrderPrice;}); // for array with all total cost property only
    return costabove;
}

module.exports = printAbove;