import {
    Contract,
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
export function assert(subject, ...contracts) {

    for (contract in contracts) {

        if (contract instanceof Contract) {

            if (contract instanceof FlatContract) {

                let result = true;
                try {
                    result = contract.predicate.call({}, subject);
                } catch (error) {
                    if (error instanceof ContractViolation) {
                        throw error;
                    } else {
                        result = false;
                    }
                } finally {
                    if (result) {
                        return subject;
                    } else {
                        throw ContractViolation(contract.message, subject, contract);
                    }
                }

            } else {
                throw new TypeError(`Unsupported Contract: ${contract}`);
            }

        } else {
            throw new TypeError(`Invalid Contract: ${contract}`);
        }

    }

}