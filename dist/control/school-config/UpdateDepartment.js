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

var UpdateDepartment = function UpdateDepartment(id, update, callback) {
    _classCallCheck(this, UpdateDepartment);

    _Department2.default.update({ _id: id }, update, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed to update departmentId ' + id
            });
        } else {
            callback(undefined, result);
        }
    });
};

exports.default = UpdateDepartment;