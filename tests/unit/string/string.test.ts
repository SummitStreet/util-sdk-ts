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
 * Unit tests for the constructs in src/string/string.ts.
 */

import { describe, expect, it } from "vitest";

import { asCamelCase, asSnakeCase } from "../../../src/string/string.ts";

describe("asCamelCase", () => {
  it("returns undefined when the input is undefined", () => {
    expect(asCamelCase(undefined)).toBeUndefined();
  });

  it("returns an empty string when the input is empty", () => {
    expect(asCamelCase("")).toBe("");
  });

  it("returns a single lowercase word unchanged", () => {
    expect(asCamelCase("foo")).toBe("foo");
  });

  it("converts kebab-case to camelCase", () => {
    expect(asCamelCase("foo-bar")).toBe("fooBar");
  });

  it("converts snake_case to camelCase", () => {
    expect(asCamelCase("foo_bar")).toBe("fooBar");
  });

  it("converts space-separated words to camelCase", () => {
    expect(asCamelCase("foo bar")).toBe("fooBar");
  });

  it("preserves an already camelCase identifier", () => {
    expect(asCamelCase("fooBar")).toBe("fooBar");
  });

  it("converts SCREAMING_SNAKE_CASE to camelCase", () => {
    expect(asCamelCase("FOO_BAR")).toBe("fooBar");
  });

  it("normalizes consecutive uppercase sequences in camelCase identifiers", () => {
    expect(asCamelCase("myHTTPClient")).toBe("myHttpClient");
  });

  it("collapses multiple consecutive separators into a single word boundary", () => {
    expect(asCamelCase("foo--bar")).toBe("fooBar");
  });

  it("discards a trailing separator without producing a trailing artifact", () => {
    expect(asCamelCase("foo-")).toBe("foo");
  });
});

describe("asSnakeCase", () => {
  it("returns undefined when the input is undefined", () => {
    expect(asSnakeCase(undefined)).toBeUndefined();
  });

  it("returns an empty string when the input is empty", () => {
    expect(asSnakeCase("")).toBe("");
  });

  it("returns a single lowercase word unchanged", () => {
    expect(asSnakeCase("foo")).toBe("foo");
  });

  it("converts camelCase to snake_case", () => {
    expect(asSnakeCase("fooBar")).toBe("foo_bar");
  });

  it("converts kebab-case to snake_case", () => {
    expect(asSnakeCase("foo-bar")).toBe("foo_bar");
  });

  it("converts space-separated words to snake_case", () => {
    expect(asSnakeCase("foo bar")).toBe("foo_bar");
  });

  it("preserves an already snake_case identifier", () => {
    expect(asSnakeCase("foo_bar")).toBe("foo_bar");
  });

  it("converts SCREAMING_SNAKE_CASE to snake_case", () => {
    expect(asSnakeCase("FOO_BAR")).toBe("foo_bar");
  });

  it("normalizes consecutive uppercase sequences in camelCase identifiers", () => {
    expect(asSnakeCase("myHTTPClient")).toBe("my_http_client");
  });

  it("strips leading and trailing whitespace before conversion", () => {
    expect(asSnakeCase("  foo bar  ")).toBe("foo_bar");
  });

  it("strips a leading separator from the normalized result", () => {
    expect(asSnakeCase("_foo")).toBe("foo");
  });

  it("strips a trailing separator from the normalized result", () => {
    expect(asSnakeCase("foo_")).toBe("foo");
  });

  it("collapses multiple consecutive separators into a single underscore", () => {
    expect(asSnakeCase("foo--bar")).toBe("foo_bar");
  });
});
