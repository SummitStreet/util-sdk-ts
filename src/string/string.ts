/**
 * @license
 * The MIT License (MIT)
 *
 * Copyright (c) 2025 David Padgett/Summit Street Technologies.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @file
 * The string module defines APIs, types, and data that aid with string
 * manipulation.
 */

/**
 * Converts an identifier, possibly the name of a property, into camel case
 * form.  For example, the input "property-name", "property_name",
 * "propertyName" all produce the value "propertyName".
 *
 * @param id
 *    The identifier to be converted to camel case.
 *
 * @returns
 *    A camel case representation of the identifier.
 */
export const asCamelCase = (id?: string): string | undefined => {
  return id
    ?.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
};

/**
 * Converts an identifier, possibly the name of a property, into snake case
 * form.
 *
 * @param id
 *    The identifier to be converted to snake case.
 * @returns
 *    A snake case representation of the identifier.
 */
export const asSnakeCase = (id?: string): string | undefined => {
  return id
    ?.trim()
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[_\s-]+/g, "_")
    .toLowerCase()
    .replace(/^_+|_+$/g, "");
};
