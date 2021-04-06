import {
    FlatContract
} from './fabric.contract.js';

import {
    Category
} from './fabric.category.js';

/**
 * 
 */
export const Type = {
    Undefined: "undefined",
    Boolean: "boolean",
    Number: "number",
    String: "string",
    BigInt: "bigint",
    Symbol: "symbol",
    Object: "object",
    Function: "function"
}

/**
 * 
 * @param {*} operand 
 * @param {*} type 
 */
export function typeOf(operand, type) {
    return (typeof operand) === type;
}

/**
 * 
 * @param {*} object 
 * @param {*} constructor 
 */
export function instanceOf(object, constructor) {
    return (object instanceof constructor);
}

/**
 * 
 */
export const TypeUndefined = new FlatContract(function (subject) {
    return typeOf(subject, Type.Undefined);
}, `Expect subject to be of type '${Type.Undefined}'!`);

/**
 * 
 */
export const TypeBoolean = new FlatContract(function (subject) {
    return typeOf(subject, Type.Boolean);
}, `Expect subject to be of type '${Type.Boolean}'`);

/**
 * 
 */
export const TypeNumber = new FlatContract(function (subject) {
    return typeOf(subject, Type.Number);
}, `Expect subject to be of type '${Type.Boolean}'!`);

/**
 * 
 */
export const TypeString = new FlatContract(function (subject) {
    return typeOf(subject, Type.String);
}, `Expect subject to be of type '${Type.String}'`);

/**
 * 
 */
export const TypeBigInt = new FlatContract(function (subject) {
    return typeOf(subject, Type.BigInt);
}, `Expect subject to be of type '${Type.BigInt}'!`);

/**
 * 
 */
export const TypeSymbol = new FlatContract(function (subject) {
    return typeOf(subject, Type.Symbol);
}, `Expect subject to be of type '${Type.Symbol}'!`);

/**
 * 
 */
export const TypeObject = new FlatContract(function (subject) {
    return typeOf(subject, Type.Object);
}, `Expect subject to be of type '${Type.Object}'!`);

/**
 * 
 */
export const TypeFunction = new FlatContract(function (subject) {
    return typeOf(subject, Type.Function);
}, `Expect subject to be of type '${Type.Function}'!`);


// xxx xxx xxx


/**
 * 
 */
 export const InstanceOfArray= new FlatContract(function (subject) {
    return instanceOf(subject, Array);
}, `Expect subject to be an instance of 'Array'!`);


/**
 * 
 */
 export const InstanceOfCategory = new FlatContract(function (subject) {
    return instanceOf(subject, Category);
}, `Expect subject to be an instance of 'Category'!`);


// xxx xxx xxx


/**
 * 
 */
 export const InstanceOfCategory = new FlatContract(function (subject) {
    return instanceOf(subject, Category);
}, `Expect subject to be an instance of 'Category'!`);




/**
 * 
 */
 export const InstanceOfHTMLElement = new FlatContract(function (subject) {
    return instanceOf(subject, HTMLElement);
}, `Expect subject to be an instance of 'HTMLElement'!`);