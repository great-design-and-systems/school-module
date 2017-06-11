'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CreateFacultyProfile = require('../../control/faculty/CreateFacultyProfile');

var _CreateFacultyProfile2 = _interopRequireDefault(_CreateFacultyProfile);

var _UpdateFacultyProfile = require('../../control/faculty/UpdateFacultyProfile');

var _UpdateFacultyProfile2 = _interopRequireDefault(_UpdateFacultyProfile);

var _GetFacultyProfileByFacultyId = require('../../control/faculty/GetFacultyProfileByFacultyId');

var _GetFacultyProfileByFacultyId2 = _interopRequireDefault(_GetFacultyProfileByFacultyId);

var _DeleteFacultyProfileByFacultyId = require('../../control/faculty/DeleteFacultyProfileByFacultyId');

var _DeleteFacultyProfileByFacultyId2 = _interopRequireDefault(_DeleteFacultyProfileByFacultyId);

var _GetFaculties = require('../../control/faculty/GetFaculties');

var _GetFaculties2 = _interopRequireDefault(_GetFaculties);

var _ValidateFacultyId = require('../../control/faculty/ValidateFacultyId');

var _ValidateFacultyId2 = _interopRequireDefault(_ValidateFacultyId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Faculties = function () {
    function Faculties() {
        _classCallCheck(this, Faculties);
    }

    _createClass(Faculties, [{
        key: 'getProfileByFacultyId',
        value: function getProfileByFacultyId(facultyId, callback) {
            new _GetFacultyProfileByFacultyId2.default(facultyId, function (err, result) {
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
            new _CreateFacultyProfile2.default({
                facultyId: param.facultyId,
                firstName: param.firstName,
                middleName: param.middleName,
                lastName: param.lastName,
                gender: param.gender,
                contactNo: param.contactNo,
                emailAddress: param.emailAddress,
                department: param.department,
                imageId: param.imageId
            }, callback);
        }
    }, {
        key: 'update',
        value: function update(facultyId, param, callback) {
            new _UpdateFacultyProfile2.default(facultyId, param, callback);
        }
    }, {
        key: 'removeFaculty',
        value: function removeFaculty(facultyId, callback) {
            new _DeleteFacultyProfileByFacultyId2.default(facultyId, function (err) {
                if (!err) {
                    callback(undefined, {
                        message: 'Faculty has been removed.'
                    });
                } else {
                    callback(err);
                }
            });
        }
    }, {
        key: 'getFaculties',
        value: function getFaculties(queryParam, callback) {
            console.log(queryParam);
            new _GetFaculties2.default(queryParam, function (err, result) {
                if (err) {
                    callback({ message: 'Failed to get faculty records.' });
                } else {
                    callback(undefined, result);
                }
            });
        }
    }, {
        key: 'validateFacultyId',
        value: function validateFacultyId(facultyId, callback) {
            new _ValidateFacultyId2.default(facultyId, callback);
        }
    }]);

    return Faculties;
}();

exports.default = Faculties;