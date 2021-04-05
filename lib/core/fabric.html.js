import {
    assert
}  from './fabric.assert.js';

import {
    FlatContract
} from './fabric.contract.js';

import {
    typeOf,
    instanceOf,
    TypeObject
} from './fabric.type.js';

import { 
    load
} from '../fabric.load.js';

import {
    define 
} from '../fabric.define.js';

import Mustache from 'Mustache';


/**
 * 
 */
export class HTMLElement {

    /**
     * 
     * @param {*} attributes - The element's content attributes.
     * @param {*} categories - The element's content categories.
     */
    constructor(attributes, categories) {

        // TODO, add verification for attributes
        define('attributes', this, {

            /**
             * 
             * @returns 
             */
            get() { 
                return attributes;
            },

            /**
             * 
             * @param {*} value 
             * @returns 
             */
            set(value) { 
                return attributes = assert(value, _Object_);;
            }

        });

        define('categories', this, {

            /**
             * 
             * @returns 
             */
            get() { 
                return categories;
            },

            /**
             * 
             * @param {*} value 
             * @returns 
             */
            set(value) { 
                return categories = assert(value, TypeCategory);
            }

        });

        this.categories = assert(categories, TypeObject);  // TODO, need TypeCategoty contract
    }

    /**
     * 
     * @param {*} template 
     * @param {*} scope 
     */
    render(template, scope) {
        return Mustache.render(load(template), scope);
    }
}

