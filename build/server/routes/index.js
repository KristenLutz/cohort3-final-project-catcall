'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

const isProdBuild = process.env.npm_lifecycle_event.endsWith('prod');

if (isProdBuild) {
    router.get('/', function (req, res, next) {
        res.sendFile(_path2.default.join(__dirname, '..', '..', '..', 'build', 'client', 'build', 'index.html'));
    });

    router.use('/', _express2.default.static(_path2.default.join(__dirname, '..', '..', '..', 'build', 'client', 'build')));
} else {
    router.get('/', function (req, res, next) {
        res.send('Run a production script (ending with \':prod\') and you will see the index.html on this route!');
    });
}

exports.default = router;
//# sourceMappingURL=index.js.map