/**
 * 
 */
export class Category {

    // TODO, make code private

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
        for (const category of categories) {
            if (category instanceof Category)
                number |= category.code;
            else
                throw new TypeError(`Invalid content category: ${category}`);
        }
        return new Category(number);
    }

    static FLOW = new Category(1 << 0);
    static SECTIONING = new Category(1 << 1);
    static HEADING = new Category(1 << 2);
    static PHRASING = new Category(1 << 3);
    static EMBEDDED = new Category(1 << 4);
    static INTERACTIVE = new Category(1 << 5);
    static METADATA = new Category(1 << 6);
    static PALPABLE = new Category(1 << 7);

    // TODO, form associated content 
    static FORMASSOCIATED = new Category(1 << 8);

}

export const Categories = [
    Category.FLOW, 
    Category.SECTIONING, 
    Category.HEADING, 
    Category.PHRASING, 
    Category.EMBEDDED, 
    Category.INTERACTIVE, 
    Category.METADATA, 
    Category.PALPABLE, 
    Category.FORMASSOCIATED];


/**
 * 
 * @param {*} target 
 * @param {*} category 
 */
export function categoryOf(target, category) {
    // TODO, must be instance of Category
    return (target.code & category.code) != 0;
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