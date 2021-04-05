//     _      __ _          
//  __| |___ / _(_)_ _  ___ 
// / _` / -_)  _| | ' \/ -_)
// \__,_\___|_| |_|_||_\___|

/**
 * 
 * @param {*} name 
 * @param {*} object 
 * @param {*} descriptor 
 */
export function define(name, object, descriptor) {
    Object.defineProperty(object, name, descriptor);
}