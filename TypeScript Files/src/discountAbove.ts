import { MyStrings, Iobjectarray } from './enum.d';

let discountAbove= (finalArrayObject : Required<Iobjectarray[]>,above : number,percentage : number) : number[] => {
    const percengate : number = (percentage / 100);
    console.log(MyStrings.partE);
    return finalArrayObject
    .map(e=>{return e.totalOrderPrice;})
    .map((element : number ) => {
        return element > above?
        element = element - (element * (percengate)):
        element;
    })
}
export default discountAbove;