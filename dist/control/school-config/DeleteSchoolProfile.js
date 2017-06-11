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

var DeleteSchoolProfile = function DeleteSchoolProfile(schoolId, callback) {
    _classCallCheck(this, DeleteSchoolProfile);

    _SchoolProfile2.default.remove({
        _id: schoolId
    }, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed deleting schoolId ' + schoolId
            });
        } else {
            callback(null, result);
        }
    });
};

exports.default = DeleteSchoolProfile;