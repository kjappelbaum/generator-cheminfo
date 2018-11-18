# <%= name %>

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]<% if (codecov) { %>
  [![Test coverage][codecov-image]][codecov-url]<% } %>
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]
  
<%= description %>

## Installation

`$ npm install <%= name %>`

## [API Documentation](https://<%= org %>.github.io/<%= name %>/)

## Example

```js
const <%= camelName %> = require('<%= name %>');
```
<% if (runkit) { %>
Or test it in [Runkit](https://runkit.com/npm/<%= name %>)<% } %>

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/<%= name %>.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/<%= name %>
[travis-image]: https://img.shields.io/travis/<%= org %>/<%= name %>/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/<%= org %>/<%= name %><% if (codecov) { %>
[codecov-image]: https://img.shields.io/codecov/c/github/<%= org %>/<%= name %>.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/<%= org %>/<%= name %><% } %>
[david-image]: https://img.shields.io/david/<%= org %>/<%= name %>.svg?style=flat-square
[david-url]: https://david-dm.org/<%= org %>/<%= name %>
[download-image]: https://img.shields.io/npm/dm/<%= name %>.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/<%= name %>