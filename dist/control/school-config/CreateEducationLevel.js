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

var CreateEducationLevel = function CreateEducationLevel(educationLevel, callback) {
    _classCallCheck(this, CreateEducationLevel);

    _EducationLevel2.default.create(educationLevel, function (err, created) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed creating new education level.'
            });
        } else {
            callback(undefined, created);
        }
    });
};

exports.default = CreateEducationLevel;