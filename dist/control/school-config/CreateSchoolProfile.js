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

var CreateSchoolProfile = function CreateSchoolProfile(schoolProfile, callback) {
    _classCallCheck(this, CreateSchoolProfile);

    _SchoolProfile2.default.create(schoolProfile, function (err, created) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed creating new school profile.'
            });
        } else {
            callback(undefined, created);
        }
    });
};

exports.default = CreateSchoolProfile;