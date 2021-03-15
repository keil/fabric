import {
    Type,
    typeOf
} from './fabric.type.js'

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
        
        if (!typeOf(predicate, Type.Function))
            throw new TypeError(`Invalid Predicate: ${contract} `);
        else
            this.predicate = predicate;

        if (!typeOf(message, Type.String))
            throw new TypeError(`Invalid Message: ${contract} `);
        else
            this.message = message;
    }

}