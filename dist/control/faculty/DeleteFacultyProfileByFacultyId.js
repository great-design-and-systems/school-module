'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _FacultyProfile = require('../../entity/FacultyProfile');

var _FacultyProfile2 = _interopRequireDefault(_FacultyProfile);

var _AppLogger = require('../AppLogger');

var _AppLogger2 = _interopRequireDefault(_AppLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeleteFacultyProfileByFacultyId = function DeleteFacultyProfileByFacultyId(facultyId, callback) {
    _classCallCheck(this, DeleteFacultyProfileByFacultyId);

    _FacultyProfile2.default.findByIdAndRemove(facultyId, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed removing faculty ID' + facultyId
            });
        } else {
            callback(null, result);
        }
    });
};

exports.default = DeleteFacultyProfileByFacultyId;