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

var CreateDepartment = function CreateDepartment(department, callback) {
    _classCallCheck(this, CreateDepartment);

    _Department2.default.create(department, function (err, created) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed creating new department.'
            });
        } else {
            callback(undefined, created);
        }
    });
};

exports.default = CreateDepartment;