# <%= name %>

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  <% if (coveralls) { %>[![Test coverage][coveralls-image]][coveralls-url]<% } %>
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]
  
<%= description %>

## Installation

`$ npm install <%= name %>`

## [API Documentation](https://cheminfo-js.github.io/<%= name %>/)

## Example

```js
const <%= camelName %> = require('<%= name %>');
```
<% if (runkit) { %>
Or test it in [Runkit](https://runkit.com/npm/<%= name %>)<% } %>

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/<%= name %>.svg?style=flat-square
[npm-url]: https://npmjs.org/package/<%= name %>
[travis-image]: https://img.shields.io/travis/cheminfo-js/<%= name %>/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo-js/<%= name %>
<% if (coveralls) { %>[coveralls-image]: https://img.shields.io/coveralls/cheminfo-js/<%= name %>.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/cheminfo-js/<%= name %><% } %>
[david-image]: https://img.shields.io/david/cheminfo-js/<%= name %>.svg?style=flat-square
[david-url]: https://david-dm.org/cheminfo-js/<%= name %>
[download-image]: https://img.shields.io/npm/dm/<%= name %>.svg?style=flat-square
[download-url]: https://npmjs.org/package/<%= name %>