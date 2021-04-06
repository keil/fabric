import fs from 'fs';
import path from "path";

/**
 * Path to templates base dir.
 * @private
 */
const basedir = "./lib/html/";

/**
 * 
 * @param {*} name - The template's name to load.
 * @returns {*} The template as string.
 */
export function load(name) {
    console.debug(`Load template ${path.resolve(basedir, name)}.`);
    return fs.readFileSync(path.resolve(basedir, name)).toString();
};