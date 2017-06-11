'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _EducationLevel = require('../../entity/EducationLevel');

var _EducationLevel2 = _interopRequireDefault(_EducationLevel);

var _AppLogger = require('../AppLogger');

var _AppLogger2 = _interopRequireDefault(_AppLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetEducationLevelByEducationLevelId = function GetEducationLevelByEducationLevelId(educationLevelId, callback) {
    _classCallCheck(this, GetEducationLevelByEducationLevelId);

    _EducationLevel2.default.findById(educationLevelId, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed to get educationLevelId ' + educationLevelId
            });
        } else {
            callback(undefined, result);
        }
    });
};

exports.default = GetEducationLevelByEducationLevelId;