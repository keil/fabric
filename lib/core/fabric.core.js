import {
    assert
} from './../app/fabric.assert.js';

import {
    Category
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
    FORMASSOCIATED
} from './../app/fabric.content.js';

import {
    TypeUndefined,
    TypeBoolean,
    TypeNumber,
    TypeString,
    TypeBigInt,
    TypeSymbol,
    TypeObject,
    TypeFunction
} from './../app/fabric.type.js';

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
    constructor(attributes, categories) {
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
        return this.#categories = assert(categories, TypeCategory);;
    }

    /**
     * 
     * @param {*} template 
     * @param {*} scope 
     * @returns 
     */
    render(template, scope) {
        return Mustache.render(load(template), scope);
    }
}

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
        super(attributes, Category.of([]));
    }

    /**
     * @override
     */
    render() {
        return super.render('doctype.mustache', {
            attributes:this.attributes
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

    #head;
    #body;

    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(head, body, attributes = {}) {
        super(attributes, Category.of([]));
        this.head = head;
        this.body = body;
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
        // TODO, must be Head element
        return this.#head = assert(head, PhrasingContent);
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
        // TODO, must be Body element
        return this.#body = assert(body, PhrasingContent);;
    }

    /**
     * @override
     */
    render() {
        return super.render('html.mustache', {
            attributes:this.attributes,
            head:this.head,
            body:this.body
        });
    }
}

/**
 * 
 */
 export class Head extends HTMLElement {

    #metadata;

    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(metadata, attributes = {}) {
        super(attributes, Category.of([]));
        this.title = title;
    }

    get metadata() {
        return this.#metadata;
    }

    set metadata(metadata) {
        // TODO, one element bust be of type title?
        return this.#metadata = assert(metadata, TypeObject);
    }

    /**
     * @override
     */
    render() {
        return super.render('title.mustache', {
            attributes:this.attributes,
            metadata:this.metadata
        });
    }
}

/**
 * 
 */
 export class Body extends HTMLElement {

    #content;

    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(content, attributes = {}) {
        super(attributes, Category.of([]));
        this.content = content;
    }

    get content() {
        return this.#content;
    }

    set content(content) {

        for(c in content) {

        }

        // TODO, one element bust be of type title?
        return this.#content = assert(content, TypeObject);
    }

    /**
     * @override
     */
    render() {
        return super.render('title.mustache', {
            attributes:this.attributes,
            metadata:this.metadata
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
        super(attributes, Category.of([METADATA]));
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
        return super.render('title.mustache', this);
    }
}













export class H1Heading extends HTMLElement {

    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(content, attributes = {}) {
        super(attributes, Category.of([FLOW, HEADING, PALPABLE]));

        define('content', this, {

            /**
             * 
             * @returns 
             */
            get() {
                return content;
            },

            /**
             * 
             * @param {*} value 
             * @returns 
             */
            set(value) {
                return content = assert(value, PhrasingContent);
            }

        });

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


let h1 = new H1Heading();


//  ___                                  _    
// | _ \__ _ _ _ __ _ __ _ _ _ __ _ _ __| |_  
// |  _/ _` | '_/ _` / _` | '_/ _` | '_ \ ' \ 
// |_| \__,_|_| \__,_\__, |_| \__,_| .__/_||_|
//                   |___/         |_|        


/**
 * 
 */
export class Paragraph extends HTMLElement {

    #content;

    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(content, attributes = {}) {
        super(attributes, Category.of([FLOW, PALPABLE]));
        this.content = content;
    }

    get content() {
        return this.#content;
    }

    set content() {
        return this.#content = assert(value, PhrasingContent);;
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

