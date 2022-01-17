import _orderBy from 'lodash/orderBy';
import getArrayObject from './getArrayObject';
import displayfun from './displayfunc';
import { MyStrings, Iobjectarray , IUnionstringundefined , IUnionRequiredarrayundefined } from './enum.d';

let chooseChioce = (finalArrayObject : Required<Iobjectarray[]>) => {
    const choice = require('prompt-sync')();
    const userarray = require('prompt-sync')();
    
    /////////// CHOOSE LIST //////////////////////
    let chooseoption = (y : string ='first') : IUnionstringundefined => {
        console.log("A : for add order. \n");
        console.log("B : for delet order. \n");
        console.log("C : find an order. \n");
        console.log("D : for checkout. \n");
        console.log("Q : for Exit. \n");
        let option : IUnionstringundefined;
        if(y === 'first'){
            option = choice('Please enter your choice : ');
        }
        else if( y=== 'another choice'){
            option = choice('Please enter another choice or Q for Exit: ');
        }
        else{
            option = choice('Please enter a correct choice from above (make sure your using UperCase): ');
        }
        return option;
    }
    
    /////////// ADD ORDER //////////////////////
    let addorder = () : IUnionRequiredarrayundefined => {
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
            addorder();
        }
    };
    
    /////////// DELETE ORDER //////////////////////
    let deleteorder = () : IUnionRequiredarrayundefined => {
        console.log("NOTE : charecters, hexadecimals + float numbers will be ignored, only the positive integer values are allowed ");
        let arraybyuser = userarray("Enter the ID of value/values to be deleted using ',' in between (ex: for one value 43/ for values : 43,23,123): ");
        arraybyuser = arraybyuser
                    .split(',')
                    .filter(element => {
                        if (!isNaN(element) && element.toString().indexOf('.') == -1 && element.toString().indexOf('#') == -1){
                            return element;
                        }
                    }).map(element => parseInt(element))
                    .filter(element => Number.isInteger(parseInt(element)) && element > 0)
                    .map((newelement) =>{
                        finalArrayObject = finalArrayObject.filter(element => {
                            return newelement !== element['orderID'];
                        });
                    });
        finalArrayObject = _orderBy(finalArrayObject,['totalOrderPrice'],['asc']);
        return finalArrayObject;
    };
    
    /////////// FIND ORDER //////////////////////
    let findorder = () : IUnionRequiredarrayundefined => {
        console.log("NOTE : charecters, hexadecimals + float numbers will be ignored, only the positive integer values are allowed ");
        let arraybyuser = userarray("Enter the Order Number/Numbers to be filteres using ',' between more than one number (ex: for one number 43 / for numbers : 43,23,123): ");
        let arrayfromuser : Required<Iobjectarray[]>= [];
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
    
    /////////// CHECKOUT ORDER //////////////////////
    let checkoutorder =() => {
        console.log(displayfun(finalArrayObject,'$'));
    };
    
    
    let choicerecursive = (y : string ='first') => {
        switch(chooseoption(y)){
            case 'A':
                console.log("Add your order ");
                addorder();
                choicerecursive('another choice');break;
            case 'B':
                console.log("Delete your order ");
                deleteorder();
                choicerecursive('another choice');break;
            case 'C':
                console.log("Find your order ");
                findorder();
                choicerecursive('another choice');break;
            case 'D':
                console.log("Checkout yyour orders ");
                checkoutorder();
                choicerecursive('another choice');break;
            case 'Q':
                console.log("Exit");break;
            default:
                console.log("Please enter a correct choice from the below : ");
                choicerecursive('default');break;
        }
    }
    console.log(MyStrings.partF);
    choicerecursive();
}
export default chooseChioce;