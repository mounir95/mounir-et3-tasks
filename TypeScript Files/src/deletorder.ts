import { Myconstants, TObjectArray, TUnionRequiredarrayundefined } from './enum.d';
import _orderBy from 'lodash/orderBy';
const userarray = require('prompt-sync')();

/////////// DELETE ORDER //////////////////////
let deleteorder = (finalArrayObject: Required<TObjectArray[]>) : TUnionRequiredarrayundefined => {
    console.log("NOTE : charecters, hexadecimals + float numbers will be ignored, only the positive integer values are allowed ");
    let arraybyuser = userarray("Enter the ID of value/values to be deleted using ',' in between (ex: for one value 43/ for values : 43,23,123): ");
    arraybyuser = arraybyuser
                .split(',')
                .filter(element => {
                    if (!isNaN(element) && element.toString().indexOf('.') == Myconstants.negativeone && element.toString().indexOf('#') == Myconstants.negativeone){
                        return element;
                    }
                }).map(element => parseInt(element))
                .filter(element => Number.isInteger(parseInt(element)) && element > 0)
                .map((newelement) =>{
                    finalArrayObject = finalArrayObject.filter((element,index) => {
                        if(newelement === element['orderID']) {
                            finalArrayObject.splice(index,1);
                        }
                        else {return newelement !== element['orderID'];}
                    });
                });
    finalArrayObject = _orderBy(finalArrayObject,['totalOrderPrice'],['asc']);
    return finalArrayObject;
};
export default deleteorder;