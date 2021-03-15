import {
    Type,
    typeOf,
    instanceOf
} from './fabric.type.js'

import {
    FlatContract
} from './fabric.contract.js';

import {
    HTMLElement,
} from './fabric.html.js';

export class Category {

    /**
     * 
     * @param {*} code 
     */
    constructor(code) {
        Category.categories = Category.categories || new Map();
        if (Category.categories.has(code)) {
            return Category.categories.get(code);
        } else {
            Category.categories.set(code, this);
        }
        this.code = code;
    }

    /**
     * 
     */
    toString() {
        return `Category.${this.code}`;
    }

    /**
     * 
     * @param  {...any} categories 
     */
    static of(...categories) {
        let number = 0;
        for (const category in categories) {
            if (instanceOf(category, Category)) 
                number |= category;
            else
                throw new TypeError(`Invalid content categorz: ${category}`);
        }
        return new Category(number);
    }

    /**
     * Base Categories
     */

    static FLOW = new Category(1 << 0);
    static SECTIONING = new Category(1 << 1);
    static HEADING = new Category(1 << 2);
    static PHRASING = new Category(1 << 3);
    static EMBEDDED = new Category(1 << 4);
    static INTERACTIVE = new Category(1 << 5);
    static METADATA = new Category(1 << 6);
    static PALPABLE = new Category(1 << 7);

    // TODO
    static FORMASSOCIATED = new Category(1 << 8);

}

/**
 * 
 * @param {*} target 
 * @param {*} category 
 */
export function categoryOf(target, category) {
    return (target & category) != 0;
}

/**
 * 
 * @param {*} content 
 */
export function isFlowContent(content) {
    return categoryOf(content, Category.FLOW);
}

/**
 * 
 * @param {*} content 
 */
export function isSectioningContent(content) {
    return categoryOf(content, Category.SECTIONING);
}

/**
 * 
 * @param {*} content 
 */
export function isHeadingContent(content) {
    return categoryOf(content, category.HEADING);
}

/**
 * 
 * @param {*} content 
 */
export function isPhrasingContent(content) {
    return categoryOf(content, Category.PHRASING);
}

/**
 * 
 * @param {*} content 
 */
export function isEmbeddedContent(content) {
    return categoryOf(content, Category.EMBEDDED);
}

/**
 * 
 * @param {*} content 
 */
export function isInteractiveContent(content) {
    return categoryOf(content, Category.INTERACTIVE);
}

/**
 * 
 * @param {*} content 
 */
export function isMetadataContent(content) {
    return categoryOf(content, Category.METADATA);
}

/**
 * 
 * @param {*} content 
 */
export function isPalpableContent(content) {
    return categoryOf(content, Category.PALPABLE);
}

/**
 * 
 */
export const FlowContent = new FlatContract(function (subject) {
    return (instanceOf(subject, HTMLElement) && categoryOf(subject.categories, FLOW)) || typeOf(subject, Type.String);
}, `Expect subject to be Flow content or type string!`);

/**
 * 
 */
export const SectioningContent = new FlatContract(function (content) {
    return instanceOf(subject, HTMLElement) && categoryOf(subject.categories, SECTIONING);
}, `Expect subject to be Sectioning content!`);

/**
 * 
 */
export const HeadingContent = new FlatContract(function (content) {
    return instanceOf(subject, HTMLElement) && categoryOf(subject.categories, HEADING);
}, `Expect subject to be Heading content!`);

/**
 * 
 */
export const PhrasingContent = new FlatContract(function (subject) {
    return (instanceOf(subject, HTMLElement) && categoryOf(subject.categories, PHRASING)) || typeOf(subject, Type.String);
}, `Expect subject to be Phrasing content or type string!`);

/**
 * 
 */
export const EmbeddedContent = new FlatContract(function (subject) {
    return instanceOf(subject, HTMLElement) && categoryOf(subject.categories, EMBEDDED);
}, `Expect subject to be Embedded content!`);

/**
 * 
 */
export const InteractiveContent = new FlatContract(function (subject) {
    return instanceOf(subject, HTMLElement) && categoryOf(subject.categories, INTERACTIVE);
}, `Expect subject to be Interactive content!`);

/**
 * 
 */
export const MetadataContent = new FlatContract(function (subject) {
    return instanceOf(subject, HTMLElement) && categoryOf(subject.categories, METADATA);
}, `Expect subject to be Metadata content!`);

/**
 * 
 */
export const PalpableContent = new FlatContract(function (subject) {
    return instanceOf(subject, HTMLElement) && categoryOf(subject.categories, PALPABLE);
}, `Expect subject to be Palpable content!`);