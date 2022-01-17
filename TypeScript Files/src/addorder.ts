import { MyStrings, TObjectArray , TUnionstringundefined , TUnionRequiredarrayundefined } from './enum.d';
import getArrayObject from './getArrayObject';
import _orderBy from 'lodash/orderBy';
const userarray = require('prompt-sync')();

/////////// ADD ORDER //////////////////////
let addorder = (finalArrayObject: Required<TObjectArray[]>) : TUnionRequiredarrayundefined => {
    console.log("NOTE : charecters, hexadecimals + float numbers will be ignored, only the positive integer values are allowed ");
    let arraybyuser = userarray("Enter your value/values using ',' in between (ex: for one value 43/ for values : 43,23,123): ");
    arraybyuser = arraybyuser
                .split(',')
                .filter(element => {
                    if (!isNaN(element) && element.toString().indexOf('.') == -1 && element.toString().indexOf('#') == -1){
                        return element;
                    }
                }).map(element => parseInt(element))
                .filter(element => Number.isInteger(parseInt(element)) && element > 0)
                .sort((a,b) => a-b);
    if(arraybyuser.length > 0){
        arraybyuser.map((element) => {
            finalArrayObject.push(getArrayObject(element));
        });
        console.log('the total Order numbers is/are : ');
        console.log(_orderBy(finalArrayObject,['totalOrderPrice'],['asc']).map(e=>{return e=e.totalNumber}));
        finalArrayObject = _orderBy(finalArrayObject,['totalOrderPrice'],['asc']);
        return finalArrayObject;
    }
    else{
        console.log("the value you entered is not correct, please check the note below : ");
        addorder(finalArrayObject);
    }
};
export default addorder;