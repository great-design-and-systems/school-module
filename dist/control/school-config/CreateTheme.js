'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Theme = require('../../entity/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _AppLogger = require('../AppLogger');

var _AppLogger2 = _interopRequireDefault(_AppLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateTheme = function CreateTheme(theme, callback) {
    _classCallCheck(this, CreateTheme);

    _Theme2.default.create(theme, function (err, created) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed creating new theme.'
            });
        } else {
            callback(undefined, created);
        }
    });
};

exports.default = CreateTheme;