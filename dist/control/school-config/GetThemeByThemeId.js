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

var GetThemeByThemeId = function GetThemeByThemeId(themeId, callback) {
    _classCallCheck(this, GetThemeByThemeId);

    _Theme2.default.findById(themeId, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed to get themeId ' + themeId
            });
        } else {
            callback(undefined, result);
        }
    });
};

exports.default = GetThemeByThemeId;