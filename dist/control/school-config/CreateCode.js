'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Code = require('../../entity/Code');

var _Code2 = _interopRequireDefault(_Code);

var _AppLogger = require('../AppLogger');

var _AppLogger2 = _interopRequireDefault(_AppLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateCode = function CreateCode(code, callback) {
    _classCallCheck(this, CreateCode);

    _Code2.default.create(code, function (err, created) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed creating new code.'
            });
        } else {
            callback(undefined, created);
        }
    });
};

exports.default = CreateCode;