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

var CreateSchoolYear = function CreateSchoolYear(schoolYear, callback) {
    _classCallCheck(this, CreateSchoolYear);

    _SchoolYear2.default.create(schoolYear, function (err, created) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed creating new school year.'
            });
        } else {
            callback(undefined, created);
        }
    });
};

exports.default = CreateSchoolYear;