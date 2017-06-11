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

var ValidateFacultyId = function ValidateFacultyId(facultyId, callback) {
    _classCallCheck(this, ValidateFacultyId);

    _FacultyProfile2.default.findOne({
        facultyId: facultyId
    }, function (err, res) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback(undefined, true);
        } else {
            if (res) {
                callback({
                    message: 'Faculty ID already exists.'
                });
            } else {
                callback(undefined, true);
            }
        }
    });
};

exports.default = ValidateFacultyId;