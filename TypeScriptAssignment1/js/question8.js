"use strict";
function joinAndNormalizeURLSegments(baseURL, segments) {
    // Join the segments with slashes
    const joinedURL = segments.reduce((url, segment) => {
        return new URL(segment, url).toString();
    }, baseURL);
    // Create a new URL object and then use toString() to normalize it
    const normalizedURL = new URL(joinedURL);
    return normalizedURL.toString();
}
// Example usage:
const baseURL = 'https://example.com/';
const segments = ['path', 'to', 'resource'];
const normalizedURL = joinAndNormalizeURLSegments(baseURL, segments);
console.log(normalizedURL); // Output: https://example.com/path/to/resource
