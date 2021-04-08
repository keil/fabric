import fs from 'fs';
import path from "path";

/**
 * Path to templates base dir.
 * @private
 */
const baseDir = "./templates/";

/**
 * 
 * @param {*} name - The template's name to load.
 * @returns {*} The template as string.
 */
export function load(name = "") {
    console.debug(`Load template ${path.resolve(baseDir, name)}.`);
    return fs.readFileSync(path.resolve(baseDir, name)).toString();
};