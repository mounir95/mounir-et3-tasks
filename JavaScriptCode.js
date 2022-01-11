var _ = require('lodash');
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

let myordernumber = checkordernumber();
console.log(`Hey the order number is : ` + myordernumber);
const largeboxobject = {size:'Large',value:20,price:1.80};
const mediumboxobject = {size:'Medium',value:10,price:1.00};
const smallboxobject = {size:'Small',value:5,price:0.6};
const bagprice = 5.50;
const currency = '$';
let orderId = 1;

/////////////////////////////////////////////////////
// Start of part A
/////////////////////////////////////////////////////
let boxesarrayfun = (par) => {
    let boxesarray = [];
    boxesarray.push({size:largeboxobject.size,numbers_of_Bags: largeboxobject.value * parseInt(par / largeboxobject.value), price_of_Boxes:largeboxobject.price * parseInt(par / largeboxobject.value),quantity_of_Size : parseInt(par / largeboxobject.value)});
    par = par % largeboxobject.value;
    boxesarray.push({size:mediumboxobject.size,numbers_of_Bags: mediumboxobject.value * parseInt(par / mediumboxobject.value), price_of_Boxes:mediumboxobject.price * parseInt(par / mediumboxobject.value),quantity_of_Size : parseInt(par / mediumboxobject.value)});
    par = par % mediumboxobject.value;
    if(par > smallboxobject.value) {
        boxesarray.push({size:smallboxobject.size,numbers_of_Bags: par, price_of_Boxes:smallboxobject.price * 2,quantity_of_Size : 2});
    }
    else if (par > 0){
        boxesarray.push({size:smallboxobject.size,numbers_of_Bags:  par, price_of_Boxes:smallboxobject.price * 1,quantity_of_Size : 1});
    }
    else{
        boxesarray.push({size:smallboxobject.size,numbers_of_Bags:  par, price_of_Boxes:smallboxobject.price * par,quantity_of_Size : par});
    }
    return boxesarray;
}

let order = (par) => {
    let bagp = bagprice;
    let boxesarray = [];
    let totalnumberofbags, totalcoffeeprice;
    let totalbagsprice, totalorderprice;
    let finalobject = {};
    finalobject["orderID"] = orderId;
    boxesarray = boxesarrayfun(par);
    totalnumberofbags = boxesarray.reduce((accumulator, current) => accumulator + (current.numbers_of_Bags), 0);
    finalobject["totalNumber"] = totalnumberofbags;
    totalcoffeeprice = totalnumberofbags * bagp;
    finalobject["totalCoffePrice"] = totalcoffeeprice;
    totalbagsprice = boxesarray.reduce((accumulator, current) => (accumulator + current.price_of_Boxes ), 0);
    finalobject["totalBagsPrice"] =  totalbagsprice;
    totalorderprice = totalcoffeeprice + totalbagsprice;
    finalobject["totalOrderPrice"] =  totalorderprice;
    orderId++;
    let finalarray = finalobject;
    return finalarray;
}

let displayfun = (finalArrayObject) => {
    let finalstring  = "";
    finalArrayObject.map((element) => {
        // console.log(element)
        let finalobject = element;
        finalstring = finalstring.concat("the Order ID : " + finalobject["orderID"] + '\n');
        finalstring = finalstring.concat("the total number of an bags ordered : " + finalobject["totalNumber"] + '\n');
        finalstring = finalstring.concat("the total price of coffee : " + finalobject["totalCoffePrice"] + currency + '\n');
        let boxesarray = boxesarrayfun(finalobject["totalNumber"]);
        let numberofboxestring = "the number of boxes used from each size and their respective prices : \n";
        boxesarray.filter((element) => {
             if(element.quantity_of_Size > 0){
                numberofboxestring = numberofboxestring.concat('    the number of ' + element.size + ' box|boxes is : ' + element.quantity_of_Size + " with quantity of bags : " + element.numbers_of_Bags + " (each box/ " );
                element.size === 'Large'? numberofboxestring = numberofboxestring.concat('can contain 20'):element.size === 'Medium'?numberofboxestring = numberofboxestring.concat('can contain 10'):numberofboxestring = numberofboxestring.concat('can contain 5');
                return  numberofboxestring = numberofboxestring.concat(" bags), where the box|boxes price : " + element.price_of_Boxes + '' + currency+ '\n');
             }
             else{
                return numberofboxestring = numberofboxestring.concat('')
             }
        });
        let removelastbreakline = numberofboxestring;
        removelastbreakline = removelastbreakline.substring(0, removelastbreakline.length - 1);
        finalstring = finalstring.concat(removelastbreakline + '\n');
        finalstring = finalstring.concat("the total order price Bages(" + finalobject["totalBagsPrice"] + currency + ") + coffee(" + finalobject["totalCoffePrice"] + currency + "): " + finalobject["totalOrderPrice"] + currency + '\n');
        finalstring = finalstring.concat('\n');
    });
    return finalstring;
}
let finalArrayObject = []; finalArrayObject = [order(myordernumber)];
console.log("///////////////////    Part A :    ///////////////////");
console.log(displayfun(finalArrayObject));
/////////////////////////////////////////////////////
// End of part A
/////////////////////////////////////////////////////



/////////////////////////////////////////////////////
// Start of part B
/////////////////////////////////////////////////////

let partBfun = (del, valuesarray) => {
    let GivenValuefun = (valuesarray) => {
        let arraygivenvalue = [];
        valuesarray.map((element) => {
            arraygivenvalue.push(order(element));
        });
        return arraygivenvalue;
    };
    let arraygivenvalue = GivenValuefun(valuesarray);
    // finalArrayObject = arraygivenvalue; // result without the order['entred numebr]
    finalArrayObject.push.apply(finalArrayObject, arraygivenvalue); // result with the order['entered number]7
    let arraylength = finalArrayObject.length;
    let arrayindex = 0;
    let arraytimeout = () => {
        console.log(finalArrayObject[arrayindex]);  
        arrayindex++;
        if(arrayindex < arraylength){
            setTimeout(arraytimeout, 5000);
        }
    }
    console.log("///////////////////    Part B :    ///////////////////");
    console.log("Adding to your first order this array of orders : " + valuesarray + " each array element in 5 second");
    arraytimeout();
    return new Promise(resolve => {
        setTimeout(resolve, del * 1000);
    });
}
/////////////////////////////////////////////////////
// End of part B
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
// Start of part C
/////////////////////////////////////////////////////
let partCfun = () => {
        // finalArrayObject = _.orderBy(finalArrayObject, ['totalOrderPrice'],['asc']);
    finalArrayObject = _.sortBy(finalArrayObject, 'totalOrderPrice');
    let sortedbytotalOrderPricearray = _(finalArrayObject)
                                .orderBy(['totalOrderPrice'],['asc'])
                                .map('totalOrderPrice')
                                .value();
    console.log("///////////////////    Part C :    ///////////////////");
    console.log(sortedbytotalOrderPricearray);  // bring the array of object for totalOrderPrice above 280$
}

/////////////////////////////////////////////////////
// End of part C
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
// Start of part D
/////////////////////////////////////////////////////

// var uniqueUsersByID = _.uniqBy(users,'id'); //removed if had duplicate id
// users is the array of object || id is the property in object
let partDfun = () => {
    let costabove = [];
    let objectarrayofvaluesabove = (above) => {
        costabove = _(finalArrayObject)
        .filter(element => element.totalOrderPrice > above)
        // .value(); // for array with all properties
        .map('totalOrderPrice').value(); // for array with all total cost property only
        return costabove;
    }
    console.log("///////////////////    Part D :    ///////////////////");
    console.log(objectarrayofvaluesabove(280));  // bring the array of object for totalOrderPrice above 280$
}
/////////////////////////////////////////////////////
// End of part D
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
// Start of part E
/////////////////////////////////////////////////////

let partEfun= () => {
    let discountabove = (above,percentage) => {
    let percengate = (percentage / 100);
    return _(finalArrayObject)
    .map('totalOrderPrice')
    .map((element) => {
        return element > above?
        element = element - (element * (percengate)):
        element;
    }).value()
    }
    console.log("///////////////////    Part E :    ///////////////////");
    console.log(discountabove(400,15));  // bring the array of the totalOrderPrice with discount 15% for totalOrderPrice above 400$;
}
/////////////////////////////////////////////////////
// End of part E
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
// Start of part F
/////////////////////////////////////////////////////

let partFfun = () => {
    const choice = require('prompt-sync')();
    const userarray = require('prompt-sync')();
    
    /////////// CHOOSE LIST //////////////////////
    let chooseoption = (y='first') => {
        console.log("A : for add order. \n");
        console.log("B : for delet order. \n");
        console.log("C : find an order. \n");
        console.log("D : for checkout. \n");
        console.log("Q : for Exit. \n");
        let option;
        if(y === 'first'){
            option = choice('Please enter your choice : ');
            // console.log("your option is : " + option);
        }
        else if( y=== 'another choice'){
            option = choice('Please enter another choice or Q for Exit: ');
            // console.log("your option is : " + option); 
        }
        else{
            option = choice('Please enter a correct choice from above (make sure your using UperCase): ');
            // console.log("your option is : " + option); 
        }
        return option;
    }
    
    /////////// ADD ORDER //////////////////////
    let addorder = () => {
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
                finalArrayObject.push(order(element));
            });
            // console.log('the added value|values is/are : ');
            // console.log(arraybyuser);
            console.log('the total Order numbers is/are : ');
            console.log(_(finalArrayObject).orderBy(['totalOrderPrice'],['asc']).map('totalNumber').value());
    
            finalArrayObject = _(finalArrayObject).orderBy(['totalOrderPrice'],['asc']).value();
            // console.log(displayfun(finalArrayObject));
            return finalArrayObject;
        }
        else{
            console.log("the value you entered is not correct, please check the note below : ");
            addorder();
        }
    };
    
    /////////// DELETE ORDER //////////////////////
    let deleteorder = () => {
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
        // console.log(_(finalArrayObject).orderBy(['orderID'],['asc']).map('orderID').value());
        finalArrayObject = _(finalArrayObject).orderBy(['totalOrderPrice'],['asc']).value();
        return finalArrayObject;
    };
    
    /////////// FIND ORDER //////////////////////
    let findorder = () => {
        console.log("NOTE : charecters, hexadecimals + float numbers will be ignored, only the positive integer values are allowed ");
        let arraybyuser = userarray("Enter the Order Number/Numbers to be filteres using ',' between more than one number (ex: for one number 43 / for numbers : 43,23,123): ");
        let arrayfromuser = [];
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
        console.log(displayfun(arrayfromuser))
        return arrayfromuser;
    };
    
    /////////// CHECKOUT ORDER //////////////////////
    let checkoutorder =() => {
        // console.log(finalArrayObject)
        console.log(displayfun(finalArrayObject));
    };
    
    
    let choicerecursive = (y='first') => {
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
    console.log("///////////////////    Part F :    ///////////////////");
    choicerecursive();
}

/////////////////////////////////////////////////////
// END of part F
/////////////////////////////////////////////////////

// console.log(finalArrayObject)
// // console.log(displayfun(finalArrayObject));


async function someFunction() {
    let valuesarray = [52,208,31,66,110,5,88,300];
    await partBfun((((valuesarray.length) * 5)+1),valuesarray);
    await partCfun();
    await partDfun();
    await partEfun();
    await partFfun();
  } 
  someFunction();