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

var UpdateStudentProfile = function UpdateStudentProfile(id, update, callback) {
    _classCallCheck(this, UpdateStudentProfile);

    _StudentProfile2.default.update({ _id: id }, update, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed to update student: ' + id
            });
        } else {
            callback(null, result);
        }
    });
};

exports.default = UpdateStudentProfile;