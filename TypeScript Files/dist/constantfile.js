"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants = () => {
    const largeboxobject = { size: "Large" /* large */, value: 20 /* large */, price: 1.8 /* large */ };
    const mediumboxobject = { size: "Medium" /* medium */, value: 10 /* medium */, price: 1 /* medium */ };
    const smallboxobject = { size: "Small" /* small */, value: 5 /* small */, price: 0.6 /* small */ };
    const orderId = 1 /* one */;
    const bagprice = 5.5 /* bagprice */;
    const currency = "$" /* currency */;
    const valuesarray = [52 /* first */, 208 /* second */, 31 /* third */, 66 /* forth */, 110 /* fifth */, 5 /* six */, 88 /* seven */, 300 /* eight */];
    return {
        largeboxobject,
        mediumboxobject,
        smallboxobject,
        bagprice,
        currency,
        orderId,
        valuesarray
    };
};
exports.default = constants;
