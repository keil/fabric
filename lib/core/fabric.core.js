import {
    assert
} from './../app/fabric.assert.js';

import {
    FlatContract
} from './../app/fabric.contract.js';

import {
    Category,
    Categories
} from './../app/fabric.category.js';

import {
    FlowContent,
    SectioningContent,
    HeadingContent,
    PhrasingContent,
    EmbeddedContent,
    InteractiveContent,
    MetadataContent,
    PalpableContent,
    FormassociatedContent
} from './../app/fabric.content.js';

import {
    Type,
    instanceOf,
    typeOf,
    TypeUndefined,
    TypeBoolean,
    TypeNumber,
    TypeString,
    TypeBigInt,
    TypeSymbol,
    TypeObject,
    TypeFunction,
    InstanceOfArray,
    InstanceOfCategory
} from './../app/fabric.type.js';

import {
    HTMLElement
} from './fabric.html.js'

let [FLOW, SECTIONING, HEADING, PHRASING, EMBEDDED, INTERACTIVE, METADATA, PALPABLE, FORMASSOCIATED] = Categories;

//  ___          _                  
// |   \ ___  __| |_ _  _ _ __  ___ 
// | |) / _ \/ _|  _| || | '_ \/ -_)
// |___/\___/\__|\__|\_, | .__/\___|
//                   |__/|_|        

export class Doctype extends HTMLElement {

    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(attributes = {}) {
        super(attributes, Category.of());
    }

    /**
     * @override
     */
    render() {
        return super.render('doctype.mustache', {
            attributes: this.attributes
        });
    }
}

//  _  _ _         _ 
// | || | |_ _ __ | |
// | __ |  _| '  \| |
// |_||_|\__|_|_|_|_|

/**
 * 
 */
export class Html extends HTMLElement {

    #doctype;
    #head;
    #body;

    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(doctype, head, body, attributes = {}) {
        super(attributes, Category.of());
        this.doctype = doctype;
        this.head = head;
        this.body = body;
    }

    /**
     * 
     */
    get doctype() {
        return this.#doctype;
    }

    /**
     * 
     */
    set doctype(doctype) {
        return this.#doctype = assert(doctype, new FlatContract(function (subject) {
            return instanceOf(subject, Doctype);
        }, `Expect subject to be an instance of 'Doctype'!`));
    }

    /**
     * 
     */
    get head() {
        return this.#head;
    }

    /**
     * 
     */
    set head(head) {
        return this.#head = assert(head, new FlatContract(function (subject) {
            return instanceOf(subject, Head);
        }, `Expect subject to be an instance of 'Head'!`));
    }

    /**
     * 
     */
    get body() {
        return this.#body;
    }

    /**
     * 
     */
    set body(body) {
        return this.#body = assert(body, new FlatContract(function (subject) {
            return instanceOf(subject, Body);
        }, `Expect subject to be an instance of 'Body'!`));
    }

    /**
     * @override
     */
    render() {
        return super.render('html.mustache', {
            head: this.head,
            body: this.body,
            attributes: this.attributes
        });
    }
}

/**
 * 
 */
export class Head extends HTMLElement {

    #metadata = new Array();

    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(metadata, attributes = {}) {
        super(attributes, Category.of());
        this.metadata = metadata;

        // TODO, one must be of type title!
        // lead to validation error
    }

    get metadata() {
        return Array.from(this.#metadata);
    }

    set metadata(metadata) {
        this.concat(metadata);
    }

    /**
     * 
     * @param {*} metadata 
     */
    push(metadata) {
        this.#metadata.push(assert(metadata, MetadataContent));
    }

    /**
     * 
     * @param {*} content 
     */
    concat(metadata) {
        for (const entry of assert(metadata, InstanceOfArray)) {
            this.push(entry);
        }
    }

    /**
     * @override
     */
    render() {
        return super.render('head.mustache', {
            metadata: this.metadata,
            attributes: this.attributes
        });
    }
}

/**
 * 
 */
export class Body extends HTMLElement {

    #content = new Array();

    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(content, attributes = {}) {
        super(attributes, Category.of());
        this.content = content;
    }

    get content() {
        return Array.from(this.#content);
    }

    set content(content) {
        this.concat(content);
    }

    /**
     * 
     * @param {*} content 
     */
    push(content) {
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
        return super.render('body.mustache', {
            content: this.content,
            attributes: this.attributes
        });
    }
}


















/**
 * 
 */
export class Title extends HTMLElement {

    #title;

    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(title, attributes = {}) {
        super(attributes, Category.of(METADATA));
        this.title = title;
    }

    get title() {
        return this.#title;
    }

    set title(title) {
        return this.#title = assert(title, TypeString);
    }

    /**
     * @override
     */
    render() {
        console.log("------> render title"); // TODO
        return super.render('title.mustache', {
            title: this.title,
            attributes: this.attributes
        });
    }
}


/**
 * 
 */
 export class Meta extends HTMLElement {

    /**
     * 
     * @param {*} attributes 
     */
    constructor(attributes = {}) {
        super(attributes, Category.of(METADATA));
    }

    /**
     * @override
     */
    render() {
        return super.render('meta.mustache', {
            attributes: this.attributes
        });
    }
}










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
export class Paragraph extends HTMLElement {

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
     * 
     * @override 
     */
    render() {
        return super.render('paragraph.mustache', {
            content: this.content,
            attributes: this.attributes
        });
    }

}