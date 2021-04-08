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
        return super.render('h1heading.mustache', {
            content: this.content,
            attributes: this.attributes
        });
    }
}

/**
 * 
 */
export class H2Heading extends HTMLElement {

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
        return super.render('h2heading.mustache', {
            content: this.content,
            attributes: this.attributes
        });
    }
}

/**
 * 
 */
export class H3Heading extends HTMLElement {

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
        return super.render('h3heading.mustache', {
            content: this.content,
            attributes: this.attributes
        });
    }
}

/**
 * 
 */
export class H4Heading extends HTMLElement {

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
        return super.render('h4heading.mustache', {
            content: this.content,
            attributes: this.attributes
        });
    }
}

/**
 * 
 */
export class H5Heading extends HTMLElement {

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
        return super.render('h5heading.mustache', {
            content: this.content,
            attributes: this.attributes
        });
    }
}

/**
 * 
 */
export class H6Heading extends HTMLElement {

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
        return super.render('h6heading.mustache', {
            content: this.content,
            attributes: this.attributes
        });
    }
}