/**
 * 
 */
const letters = 'abcdefghijklmnopqrstuvwxyz';

/**
 * 
 */
const numbers = '0123456789';

/**
 * 
 */
const characters = letters + numbers;

/**
 * 
 * @param {*} length 
 * @returns 
 */
export function getRandomNumber(length = 1) {
    if (length > 0)
        return numbers[Math.floor(Math.random() * Math.floor(numbers.length))] + getRandomNumber(length - 1);
    else
        return "";
}

/**
 * 
 * @param {*} length 
 * @returns 
 */
export function getRandomLetter(length = 1) {
    if (length > 0)
        return letters[Math.floor(Math.random() * Math.floor(letters.length))] + getRandomLetter(length - 1);
    else
        return "";
}

/**
 * 
 * @param {*} length 
 * @returns 
 */
export function getRandomCharacter(length = 1) {
    if (length > 0)
        return characters[Math.floor(Math.random() * Math.floor(characters.length))] + getRandomCharacter(length - 1);
    else
        return "";
}

// TODO cache

// sessionID
const sessionID = getRandomCharacter(8);

// Object -> objectID
const objects = new WeakMap();

// Object -> callbackID*
const callbacks = new WeakMap();









function freshUID(target = {}) {

    if (!objects.has(target)) {
        const objectID = objects.set(target, getRandomCharacter(16));
        console.log("oIO" + objectID);

    } else {
        const objectID = objects.get(target);
        console.log("oIO" + objectID);

    }

    console.log("oIO" + objectID);


    if (!callbacks.has(target)) {
        let callbackId = objects.set(target, new Set()).add(getRandomCharacter(8));
    } else {

        do {
            let callbackId = getRandomCharacter(8);
        } while (!callbacks.get(target).has(callbackId));

        callbacks.get(target).add(callbackId);
    }


}


console.log(freshUID());
console.log(freshUID());
console.log(freshUID());



/*
function getNewSessionId() {
    return getRandomNumber(8);
}

function getNewPath() {
    return getRandomCharacter(16);
}

function getNewAction() {
    return getRandomCharacter(8);
}

// UAI
function freshUID() {
    return getNewSessionId() + "-" + getNewPath() + "-" + getNewAction();
};
freshUID();
console.log(freshUID());

*/

// session if fix
// has map for button/action event, each has one
// hasm map for actions