import Mustache from 'Mustache';

import {
    assert
} from './../app/fabric.assert.js';

import {
    TypeObject,
    InstanceOfCategory
} from './../app/fabric.type.js';

import {
    load
} from './../runtime/fabric.load.js';

/**
 * 
 */
export class HTMLElement {

    #attributes;
    #categories;

    /**
     * 
     * @param {*} attributes - The element's content attributes.
     * @param {*} categories - The element's content categories.
     */
    constructor(attributes = {}, categories) {
        // TODO, verify attributes
        this.attributes = attributes;
        this.categories = categories;
    }

    /**
     * 
     */
    get attributes() {
        return this.#attributes;
    }

    /**
     * 
     */
    set attributes(attributes) {
        return this.#attributes = assert(attributes, TypeObject);
    }

    /**
     * 
     */
    get categories() {
        return this.#categories;
    }

    /**
     * 
     */
    set categories(categories) {
        return this.#categories = assert(categories, InstanceOfCategory);
    }

    /**
     * 
     * @param {*} template 
     * @param {*} context 
     * @returns 
     */
    render(template, context) {

        /*let view = new Object();
        for (const entry in context) {
            if (context[entry] instanceof HTMLElement)
                view[entry] = (context[entry]).render();
            else
            view[entry] = context[entry];
        } */

        return Mustache.render(load(template), this.#canonicalize(context));
    }

    #canonicalize(context) {
        let canonicalized = new Array();
        for (const entry in context) {
            if (context[entry] instanceof HTMLElement) {
                canonicalized[entry] = context[entry].render();
            } else if (context[entry] instanceof Array) {
                canonicalized[entry] = this.#canonicalize(context[entry]);
            } else {
                // TODO, test to be string
                canonicalized[entry] = context[entry];
            }
        }
        return canonicalized;
    }

}