import {
    Type,
    typeOf,
    instanceOf
} from './fabric.type.js'

import {
    Category
} from './fabric.category.js'

import {
    FlatContract
} from './fabric.contract.js';

[FLOW, SECTIONING, HEADING, PHRASING, EMBEDDED, INTERACTIVE, METADATA, PALPABLE, FORMASSOCIATED] = Category;

/**
 * 
 */
export const FlowContent = new FlatContract(function (subject) {
    return (instanceOf(subject, HTMLElement) && categoryOf(subject.categories, FLOW)) || typeOf(subject, Type.String);
}, `Expect subject to be 'Flow Content'or of type string!`);

/**
 * 
 */
export const SectioningContent = new FlatContract(function (content) {
    return instanceOf(subject, HTMLElement) && categoryOf(subject.categories, SECTIONING);
}, `Expect subject to be 'Sectioning Content'!`);

/**
 * 
 */
export const HeadingContent = new FlatContract(function (content) {
    return instanceOf(subject, HTMLElement) && categoryOf(subject.categories, HEADING);
}, `Expect subject to be 'Heading Content'!`);

/**
 * 
 */
export const PhrasingContent = new FlatContract(function (subject) {
    return (instanceOf(subject, HTMLElement) && categoryOf(subject.categories, PHRASING)) || typeOf(subject, Type.String);
}, `Expect subject to be 'Phrasing Content' or of type string!`);

/**
 * 
 */
export const EmbeddedContent = new FlatContract(function (subject) {
    return instanceOf(subject, HTMLElement) && categoryOf(subject.categories, EMBEDDED);
}, `Expect subject to be 'Embedded Content'!`);

/**
 * 
 */
export const InteractiveContent = new FlatContract(function (subject) {
    return instanceOf(subject, HTMLElement) && categoryOf(subject.categories, INTERACTIVE);
}, `Expect subject to be 'Interactive Content'!`);

/**
 * 
 */
export const MetadataContent = new FlatContract(function (subject) {
    return instanceOf(subject, HTMLElement) && categoryOf(subject.categories, METADATA);
}, `Expect subject to be 'Metadata Content'!`);

/**
 * 
 */
export const PalpableContent = new FlatContract(function (subject) {
    return instanceOf(subject, HTMLElement) && categoryOf(subject.categories, PALPABLE);
}, `Expect subject to be 'Palpable Content'!`);