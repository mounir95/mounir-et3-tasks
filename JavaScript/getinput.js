//1- babel-cli and babel-preset-env were installed
//2- create a file .babelrc with content {    "presets": ["env"]}
//3- change from require to import
//4- run npx babel-node filename.js
import constants from './constantfile';
import displayfun from './displayfunc';
import getArrayObject from './getArrayObject';
import addArrayTimeout from './addArrayTimeout';
import arraySorting from './arraySorting';
import printAbove from './printAbove';
import discountAbove from './discountAbove';
import chooseChioce from './chooseChioce';
import _orderBy from 'lodash/orderBy';
import _filter  from'lodash/filter';

async function someFunction() {
    const prompt = require('prompt-sync')();
    let str = true;
    let checkordernumber = () => {
    while (str)
    {
        const ordernumber = prompt('Please enter your order : ');
        if (!isNaN(ordernumber) && ordernumber.toString().indexOf('.') == -1 && ordernumber.toString().indexOf('#') == -1){
            if(ordernumber >= 1){
                return parseInt(ordernumber);
                str = false;
            }
            else{
                console.log(`The order number should be higher than 1.`);
            }
        }
        else{
            console.log(`Please enter a correct order number where order number should be an integer number higher than 1.`);
        }
    }
    }
    const myordernumber = checkordernumber();
    console.log(`Hey the order number is : ` + myordernumber);
    let [largeboxobject,mediumboxobject,smallboxobject,bagprice,currency,orderId] = constants();
    let finalArrayObject = []; 
    finalArrayObject = [getArrayObject(myordernumber)];
    console.log("///////////////////    Part A :    ///////////////////");
    console.log(displayfun(finalArrayObject,currency));
    const valuesarray = constants()[(constants().length-1)];
    await addArrayTimeout(finalArrayObject,(((valuesarray.length) * 5)+1),valuesarray)[0];
    finalArrayObject = await arraySorting(finalArrayObject);
    await console.log(printAbove(finalArrayObject,280));
    await console.log(discountAbove(finalArrayObject,400,15));
    await chooseChioce(finalArrayObject);
  } 
  someFunction();