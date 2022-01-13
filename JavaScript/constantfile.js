const constants = () => {
    const largeboxobject = {size:'Large',value:20,price:1.80};
    const mediumboxobject = {size:'Medium',value:10,price:1.00};
    const smallboxobject = {size:'Small',value:5,price:0.6};
    const bagprice = 5.50;
    const currency = '$';
    let orderId = 1;
    const valuesarray = [52,208,31,66,110,5,88,300];
    return [
        largeboxobject,
        mediumboxobject,
        smallboxobject,
        bagprice,
        currency,
        orderId,
        valuesarray
    ];
}
module.exports = constants;
