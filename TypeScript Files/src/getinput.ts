//1- babel-cli and babel-preset-env were installed
//2- create a file .babelrc with content {    "presets": ["env"]}
//3- change from require to import
//4- run npx babel-node src/getinput.js
import constants from './constantfile';
import  displayfun from './displayfunc';
import getArrayObject from './getArrayObject';
import addArrayTimeout from './addArrayTimeout';
import arraySorting from './arraySorting';
import printAbove from './printAbove';
import discountAbove from './discountAbove';
import chooseChioce from './chooseChioce';
import _orderBy from 'lodash/orderBy';
import _filter  from'lodash/filter';
import { MyStrings, Myconstants, Unumberundefined, Iobjectarray } from './enum.d';

async function someFunction() {
    const prompt = require('prompt-sync')();
    let str :boolean = true;
    let checkordernumber = () :Unumberundefined => {
    while (str)
    {
        const ordernumber = prompt('Please enter your order : ');
        if (!isNaN(ordernumber) && ordernumber.toString().indexOf('.') == Myconstants.negativeone && ordernumber.toString().indexOf('#') == Myconstants.negativeone){
            if(ordernumber >= Myconstants.one){
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
    const myordernumber :Unumberundefined = checkordernumber();
    console.log(`Hey the order number is : ` + myordernumber);
    let [largeboxobject,mediumboxobject,smallboxobject,bagprice,currency,orderId] = constants();
    let finalArrayObject :Required<Iobjectarray[]> = [getArrayObject(myordernumber)];
    console.log(MyStrings.partA);
    console.log(displayfun(finalArrayObject,currency));
    // let valuesarray : number[] = constants()[constants().length-1];
    let valuesarray : number[] = constants()[Myconstants.six];
    console.log(valuesarray)
    await addArrayTimeout(finalArrayObject,(((valuesarray.length) * Myconstants.five) + Myconstants.one),valuesarray)[Myconstants.zero];
    finalArrayObject = await arraySorting(finalArrayObject);
    await console.log(printAbove(finalArrayObject,Myconstants.twoeigthy));
    await console.log(discountAbove(finalArrayObject,Myconstants.fourhund,Myconstants.fifteen));
    await chooseChioce(finalArrayObject);
  } 
  someFunction();