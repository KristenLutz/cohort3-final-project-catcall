'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const setupSecurityHandler = exports.setupSecurityHandler = app => function (req, res, next) {
    if (req.cookies.sessionID === app.locals.sessionID) {
        return next();
    }

    return next(_extends({}, new Error('I can\'t trust you'), {
        status: 403
    }));
};
//# sourceMappingURL=secure.js.map