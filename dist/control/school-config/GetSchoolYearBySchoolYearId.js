'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SchoolYear = require('../../entity/SchoolYear');

var _SchoolYear2 = _interopRequireDefault(_SchoolYear);

var _AppLogger = require('../AppLogger');

var _AppLogger2 = _interopRequireDefault(_AppLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetSchoolYearBySchoolYearId = function GetSchoolYearBySchoolYearId(schoolYearId, callback) {
    _classCallCheck(this, GetSchoolYearBySchoolYearId);

    _SchoolYear2.default.findById(schoolYearId, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed to get schoolYearId ' + schoolYearId
            });
        } else {
            callback(undefined, result);
        }
    });
};

exports.default = GetSchoolYearBySchoolYearId;