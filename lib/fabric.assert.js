import {
    instanceOf
} from './fabric.type.js';

import {
    FlatContract
} from './fabric.contract.js';

/**
 * 
 */
export class ContractViolation extends Error {

    /**
     * 
     * @param {*} message 
     * @param {*} subject 
     * @param {*} constract 
     */
    constructor(message, subject, contract) {
        super(`Contract Violation: ${message}\n\texpected: ${contract}\n\tgiven: ${subject}`);
    }

}

/**
 * 
 * @param {*} subject 
 * @param {*} contract 
 */
export function assert(subject, contract) {

    if (instanceOf(contract, FlatContract)) {
        let result = true;
        try {
            result = contract.predicate.call({}, subject);
        } catch (error) {
            if (instanceOf(error, ContractViolation)) {
                throw error;
            } else {
                result = false;
            }
        } finally {
            if (result) return subject;
            else throw ContractViolation(contract.message, subject, contract);
        }
    } else {
        throw new TypeError(`Invalid Contract: ${contract}`);
    }

}