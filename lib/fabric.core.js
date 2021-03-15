import {
    HTMLElement
} from './fabric.html.js';

import {
    assert
}  from './fabric.assert.js';

import {
    Category,
    PhrasingContent
} from './fabric.category.js';

import {
    TypeObject
}  from './fabric.type.js';

/**
 * 
 */

export class H1Heading extends HTMLElement {
    
    /**
     * 
     * @param {*} content 
     * @param {*} attributes 
     */
    constructor(content, attributes = {}) {
        super(attributes, Category.of([FLOW, HEADING, PALPABLE]));
        this.content = assert(content, PhrasingContent);
        this.attributes = assert(attributes, TypeObject);
    }

    /**
     * @override
     */
    render() {
        return super.render('h1heading.mustache', this);
    }
}

/**
 * 
 */
export class Paragraph extends HTMLElement {
    
    constructor(content, attributes = {}) {
        super(attributes, Category.of([FLOW, PALPABLE]));
        this.content = assert(content, PhrasingContent);
        this.attributes = assert(attributes, TypeObject);
    }

    get content() {
        return this.content;
    }

    set content(content) {
        this.content = assert(content, PhrasingContent);
    }
    
    render() {
        return super.render('paragraph.mustache', this);
    }
}

