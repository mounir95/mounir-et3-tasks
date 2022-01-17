export const enum Myconstants {
    bagprice = 5.50,
    true = true,
    false = false,
    zero = 0,
    one = 1,
    negativeone = -1,
    five = 5,
    six=6,
    twoeigthy = 280,
    fourhund = 400,
    fifteen = 15,
    delfive = 5000,
    delone = 1000,
    currency = '$',
}

export const enum MyStrings{
    partA = "///////////////////    Part A :    ///////////////////",
    partB = "///////////////////    Part B :    ///////////////////",
    partC = "///////////////////    Part C :    ///////////////////",
    partD = "///////////////////    Part D :    ///////////////////",
    partF = "///////////////////    Part F :    ///////////////////",
    partE = "///////////////////    Part E :    ///////////////////",
}

export const enum ArrayValue {
    first = 52,
    second = 208,
    third = 31,
    forth = 66,
    fifth = 110,
    six = 5,
    seven = 88,
    eight = 300
}

export const enum size{large = 'Large',medium = 'Medium',small = 'Small'}
export const enum value{large = 20,medium = 10,small = 5}
export const enum price{large = 1.80,medium = 1.00,small = 0.6}

export type Unumberundefined = undefined | number;
export type IUnionRequiredarrayundefined = Required<Iobjectarray[]> | undefined | null;
export type IUnionstringundefined = string | undefined | null ;

export interface IPropertyofsize {
    size:string,
    value:number,
    price:number
}

export interface Iobjectarray{
    orderID: number;
    totalNumber: number;
    totalCoffePrice: number;
    totalBagsPrice: number;
    totalOrderPrice: number;
}

export interface Iboxarray{
    size: string;
    numbers_of_Bags: number;
    price_of_Boxes: number;
    quantity_of_Size: number;
}