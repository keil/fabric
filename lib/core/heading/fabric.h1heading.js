import {
    HTMLElement
} from './fabric.html.js'

import {
    Category,
    Categories
} from './../app/fabric.category.js';

import {
    PhrasingContent
} from './../app/fabric.content.js';

import {
    InstanceOfArray
} from './../app/fabric.type.js';

import {
    HTMLElement
} from './fabric.html.js'

let [FLOW, SECTIONING, HEADING, PHRASING, EMBEDDED, INTERACTIVE, METADATA, PALPABLE, FORMASSOCIATED] = Categories;

/**
 * 
 */
export class H1Heading extends HTMLElement {

    #content = new Array();

    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(content, attributes = {}) {
        super(attributes, Category.of(FLOW, HEADING, PALPABLE));
        this.content = content;
    }

    get content() {
        return Array.from(this.#content);
    }

    set content(content) {
        // TODO, copy-on-write
        this.concat(content);
    }

    /**
     * 
     * @param {*} content 
     */
    push(content) {
        this.#content.push(assert(content, PhrasingContent));
    }

    /**
     * 
     * @param {*} content 
     */
    concat(content) {
        for (const entry of assert(content, InstanceOfArray)) {
            this.push(entry);
        }
    }

    /**
     * @override
     */
    render() {
        return super.render('heading/h1heading.mustache', {
            content: this.content,
            attributes: this.attributes
        });
    }
}