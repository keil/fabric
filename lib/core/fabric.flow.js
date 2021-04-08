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
export class Header extends HTMLElement {

    #content = new Array();

    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(content, attributes = {}) {
        super(attributes, Category.of(FLOW, PALPABLE));
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
        // TODO, but with no <header> or <footer> descendant.
        this.#content.push(assert(content, FlowContent));
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
        return super.render('header.mustache', {
            content: this.content,
            attributes: this.attributes
        });
    }
}

/**
 * 
 */
 export class Footer extends HTMLElement {

    #content = new Array();

    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(content, attributes = {}) {
        super(attributes, Category.of(FLOW, PALPABLE));
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
        // TODO, but with no <header> or <footer> descendant.
        this.#content.push(assert(content, FlowContent));
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
        return super.render('footer.mustache', {
            content: this.content,
            attributes: this.attributes
        });
    }
}