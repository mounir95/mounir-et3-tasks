import boxesarrayfun from './boxesArray';

let displayfun = (finalArrayObject,currency) => {
    let finalstring  = "";
    finalArrayObject.map((element) => {
        // console.log(element)
        const finalobject = element;
        finalstring = finalstring.concat("the Order ID : " + finalobject["orderID"] + '\n');
        finalstring = finalstring.concat("the total number of an bags ordered : " + finalobject["totalNumber"] + '\n');
        finalstring = finalstring.concat("the total price of coffee : " + finalobject["totalCoffePrice"] + currency + '\n');
        const boxesarray = boxesarrayfun(finalobject["totalNumber"]);
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
        removelastbreakline = numberofboxestring.substring(0, removelastbreakline.length - 1);
        finalstring = finalstring.concat(removelastbreakline + '\n');
        finalstring = finalstring.concat("the total order price Bages(" + finalobject["totalBagsPrice"] + currency + ") + coffee(" + finalobject["totalCoffePrice"] + currency + "): " + finalobject["totalOrderPrice"] + currency + '\n');
        finalstring = finalstring.concat('\n');
    });
    return finalstring;
}
module.exports = displayfun;