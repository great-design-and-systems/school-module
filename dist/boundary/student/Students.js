'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CreateStudentProfile = require('../../control/student/CreateStudentProfile');

var _CreateStudentProfile2 = _interopRequireDefault(_CreateStudentProfile);

var _UpdateStudentProfile = require('../../control/student/UpdateStudentProfile');

var _UpdateStudentProfile2 = _interopRequireDefault(_UpdateStudentProfile);

var _GetStudentProfileByStudentId = require('../../control/student/GetStudentProfileByStudentId');

var _GetStudentProfileByStudentId2 = _interopRequireDefault(_GetStudentProfileByStudentId);

var _DeleteStudentProfileByStudentId = require('../../control/student/DeleteStudentProfileByStudentId');

var _DeleteStudentProfileByStudentId2 = _interopRequireDefault(_DeleteStudentProfileByStudentId);

var _GetStudents = require('../../control/student/GetStudents');

var _GetStudents2 = _interopRequireDefault(_GetStudents);

var _ValidateStudentId = require('../../control/student/ValidateStudentId');

var _ValidateStudentId2 = _interopRequireDefault(_ValidateStudentId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Students = function () {
    function Students() {
        _classCallCheck(this, Students);
    }

    _createClass(Students, [{
        key: 'getProfileByStudentId',
        value: function getProfileByStudentId(studentId, callback) {
            new _GetStudentProfileByStudentId2.default(studentId, function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    if (result) {
                        callback(null, result);
                    } else {
                        callback(true, null);
                    }
                }
            });
        }
    }, {
        key: 'create',
        value: function create(param, callback) {
            new _CreateStudentProfile2.default({
                studentId: param.studentId,
                firstName: param.firstName,
                middleName: param.middleName,
                lastName: param.lastName,
                gender: param.gender,
                contactNo: param.contactNo,
                emailAddress: param.emailAddress,
                department: param.department,
                level: param.level,
                imageId: param.imageId
            }, callback);
        }
    }, {
        key: 'update',
        value: function update(studentId, param, callback) {
            new _UpdateStudentProfile2.default(studentId, param, callback);
        }
    }, {
        key: 'removeStudent',
        value: function removeStudent(studentId, callback) {
            new _DeleteStudentProfileByStudentId2.default(studentId, function (err) {
                if (!err) {
                    callback(undefined, {
                        message: 'Student has been removed.'
                    });
                } else {
                    callback(err);
                }
            });
        }
    }, {
        key: 'getStudents',
        value: function getStudents(queryParam, callback) {
            console.log(queryParam);
            new _GetStudents2.default(queryParam, function (err, result) {
                if (err) {
                    callback({ message: 'Failed to get student records.' });
                } else {
                    callback(undefined, result);
                }
            });
        }
    }, {
        key: 'validateStudentId',
        value: function validateStudentId(studentId, callback) {
            new _ValidateStudentId2.default(studentId, callback);
        }
    }]);

    return Students;
}();

exports.default = Students;