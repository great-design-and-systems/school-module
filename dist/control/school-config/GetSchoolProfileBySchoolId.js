'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SchoolProfile = require('../../entity/SchoolProfile');

var _SchoolProfile2 = _interopRequireDefault(_SchoolProfile);

var _AppLogger = require('../AppLogger');

var _AppLogger2 = _interopRequireDefault(_AppLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetSchoolProfileBySchoolId = function GetSchoolProfileBySchoolId(schoolId, callback) {
    _classCallCheck(this, GetSchoolProfileBySchoolId);

    _SchoolProfile2.default.findById(schoolId, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed to get schoolId ' + schoolId
            });
        } else {
            callback(undefined, result);
        }
    });
};

exports.default = GetSchoolProfileBySchoolId;