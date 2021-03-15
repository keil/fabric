import {
    assert
}  from './fabric.assert.js';

import {
    TypeObject
} from './fabric.type.js';

import { 
    load
} from './fabric.load.js';

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
        this.attributes = assert(attributes, TypeObject);
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