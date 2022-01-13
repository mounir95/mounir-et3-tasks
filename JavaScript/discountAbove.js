let discountAbove= (finalArrayObject,above,percentage) => {
    const percengate = (percentage / 100);
    console.log("///////////////////    Part E :    ///////////////////");
    return finalArrayObject
    .map(e=>{return e = e.totalOrderPrice;})
    .map((element) => {
        return element > above?
        element = element - (element * (percengate)):
        element;
    })
}
module.exports = discountAbove;