import getArrayObject from './getArrayObject';
import { Myconstants, MyStrings, Iobjectarray } from './enum.d'

let addArrayTimeout = (finalArrayObject:Required<Iobjectarray[]>,del :number, valuesarray : number[]) :(Required<Iobjectarray[]> | Promise<unknown>)[] => {
    let GivenValuefun = (valuesarray : number[]) : Required<Iobjectarray[]> => {
        const arraygivenvalue : Required<Iobjectarray[]>= [];
        valuesarray.map((element) => {
            arraygivenvalue.push(getArrayObject(element));
        });
        return arraygivenvalue;
    };
    const arraygivenvalue : Required<Iobjectarray[]> = GivenValuefun(valuesarray);
    // finalArrayObject = arraygivenvalue; // result without the order['entred numebr]
    finalArrayObject.push.apply(finalArrayObject, arraygivenvalue); // result with the order['entered number]7
    let arrayindex : number = 0;
    let arraytimeout = () => {
        console.log(finalArrayObject[arrayindex]);  
        arrayindex++;
        if(arrayindex < finalArrayObject.length){
            setTimeout(arraytimeout, Myconstants.delfive);
        }
    }
    console.log(MyStrings.partB);
    console.log("Adding to your first order this array of orders : " + valuesarray + " each array element in 5 second");
    arraytimeout();

    return     [new Promise(resolve => {
        setTimeout(resolve, del * Myconstants.delone)    }),finalArrayObject];
}
export default addArrayTimeout;