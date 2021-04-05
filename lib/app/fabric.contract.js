/**
 * 
 */
export class Contract {
}

/**
 * 
 */
export class FlatContract extends Contract {

    /**
     * 
     * @param {*} predicate 
     * @param {*} message 
     */
    constructor(predicate, message = "") {
        super();

        if (predicate instanceof Function) {
            this.predicate = predicate;
        } else {
            throw new TypeError(`Invalid Predicate: ${predicate} `);
        }

        if (new String(message) instanceof String) {
            this.message = new String(message);
        } else {
            throw new TypeError(`Invalid Message: ${message} `);
        }
    }

}