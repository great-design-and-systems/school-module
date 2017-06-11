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

var DeleteDepartment = function DeleteDepartment(departmentId, callback) {
    _classCallCheck(this, DeleteDepartment);

    _Department2.default.remove({
        _id: departmentId
    }, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed deleting departmentId ' + departmentId
            });
        } else {
            callback(null, result);
        }
    });
};

exports.default = DeleteDepartment;