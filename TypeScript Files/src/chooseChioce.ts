import _orderBy from 'lodash/orderBy';
import addorder from './addorder';
import deleteorder from './deletorder';
import findorder from './findorder';
import checkoutorder from './checkoutorder';
import { MyStrings, TObjectArray , TUnionstringundefined , TUnionRequiredarrayundefined } from './enum.d';

let chooseChioce = (finalArrayObject : Required<TObjectArray[]>) => {
    const choice = require('prompt-sync')();
    
    /////////// CHOOSE LIST //////////////////////
    let chooseoption = (y : string ='first') : TUnionstringundefined => {
        console.log("A : for add order. \n");
        console.log("B : for delet order. \n");
        console.log("C : find an order. \n");
        console.log("D : for checkout. \n");
        console.log("Q : for Exit. \n");
        let option : TUnionstringundefined;
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

    let choicerecursive = (y : string ='first') => {
        switch(chooseoption(y)){
            case 'A':
                console.log("Add your order ");
                addorder(finalArrayObject);
                choicerecursive('another choice');break;
            case 'B':
                console.log("Delete your order ");
                deleteorder(finalArrayObject);
                choicerecursive('another choice');break;
            case 'C':
                console.log("Find your order ");
                findorder(finalArrayObject);
                choicerecursive('another choice');break;
            case 'D':
                console.log("Checkout yyour orders ");
                checkoutorder(finalArrayObject);
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