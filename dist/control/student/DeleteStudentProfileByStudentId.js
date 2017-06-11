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

var DeleteStudentProfileByStudentId = function DeleteStudentProfileByStudentId(studentId, callback) {
    _classCallCheck(this, DeleteStudentProfileByStudentId);

    _StudentProfile2.default.findByIdAndRemove(studentId, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed removing student ID' + studentId
            });
        } else {
            callback(null, result);
        }
    });
};

exports.default = DeleteStudentProfileByStudentId;