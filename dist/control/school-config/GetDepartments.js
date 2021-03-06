'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Department = require('../../entity/Department');

var _Department2 = _interopRequireDefault(_Department);

var _AppLogger = require('../AppLogger');

var _AppLogger2 = _interopRequireDefault(_AppLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetDepartments = function GetDepartments(params, callback) {
    _classCallCheck(this, GetDepartments);

    _Department2.default.find(params, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed to get departments: ' + params
            });
        } else {
            callback(undefined, result);
        }
    });
};

exports.default = GetDepartments;