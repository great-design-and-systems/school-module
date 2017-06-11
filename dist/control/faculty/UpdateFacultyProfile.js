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

var UpdateFacultyProfile = function UpdateFacultyProfile(id, update, callback) {
    _classCallCheck(this, UpdateFacultyProfile);

    _FacultyProfile2.default.update({ _id: id }, update, function (err, result) {
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

exports.default = UpdateFacultyProfile;