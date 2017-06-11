'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _StudentProfile = require('../../entity/StudentProfile');

var _StudentProfile2 = _interopRequireDefault(_StudentProfile);

var _AppLogger = require('../AppLogger');

var _AppLogger2 = _interopRequireDefault(_AppLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidateStudentId = function ValidateStudentId(studentId, callback) {
    _classCallCheck(this, ValidateStudentId);

    _StudentProfile2.default.findOne({
        studentId: studentId
    }, function (err, res) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback(undefined, true);
        } else {
            if (res) {
                callback({
                    message: 'Student ID already exists.'
                });
            } else {
                callback(undefined, true);
            }
        }
    });
};

exports.default = ValidateStudentId;