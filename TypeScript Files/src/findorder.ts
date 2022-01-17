import {TObjectArray , TUnionRequiredarrayundefined } from './enum.d';
import displayfun from './displayfunc';
const userarray = require('prompt-sync')();

/////////// FIND ORDER //////////////////////
let findorder = (finalArrayObject: Required<TObjectArray[]>) : TUnionRequiredarrayundefined => {
    console.log("NOTE : charecters, hexadecimals + float numbers will be ignored, only the positive integer values are allowed ");
    let arraybyuser = userarray("Enter the Order Number/Numbers to be filteres using ',' between more than one number (ex: for one number 43 / for numbers : 43,23,123): ");
    let arrayfromuser : Required<TObjectArray[]>= [];
    arraybyuser = arraybyuser.split(',')
                .filter(element => {
                    if (!isNaN(element) && element.toString().indexOf('.') == -1 && element.toString().indexOf('#') == -1){
                        return element;
                    }
                }).map(userelement => {
        arrayfromuser.push.apply(arrayfromuser,finalArrayObject.filter(element => {
            return element['totalNumber'] === parseInt(userelement);
        }));
    });
    console.log(displayfun(arrayfromuser,'$'))
    return arrayfromuser;
};
export default findorder;