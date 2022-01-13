import getArrayObject from './getArrayObject';
 
let addArrayTimeout = (finalArrayObject,del, valuesarray) => {
    let GivenValuefun = (valuesarray) => {
        const arraygivenvalue = [];
        valuesarray.map((element) => {
            arraygivenvalue.push(getArrayObject(element));
        });
        return arraygivenvalue;
    };
    const arraygivenvalue = GivenValuefun(valuesarray);
    // finalArrayObject = arraygivenvalue; // result without the order['entred numebr]
    finalArrayObject.push.apply(finalArrayObject, arraygivenvalue); // result with the order['entered number]7
    let arrayindex = 0;
    let arraytimeout = () => {
        console.log(finalArrayObject[arrayindex]);  
        arrayindex++;
        if(arrayindex < finalArrayObject.length){
            setTimeout(arraytimeout, 5000);
        }
    }
    console.log("///////////////////    Part B :    ///////////////////");
    console.log("Adding to your first order this array of orders : " + valuesarray + " each array element in 5 second");
    arraytimeout();

    return     [new Promise(resolve => {
        setTimeout(resolve, del * 1000)    }),finalArrayObject];
}
module.exports = addArrayTimeout;