'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SchoolSem = require('../../entity/SchoolSem');

var _SchoolSem2 = _interopRequireDefault(_SchoolSem);

var _AppLogger = require('../AppLogger');

var _AppLogger2 = _interopRequireDefault(_AppLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetSchoolSems = function GetSchoolSems(params, callback) {
    _classCallCheck(this, GetSchoolSems);

    _SchoolSem2.default.find(params, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed to get school sems: ' + params
            });
        } else {
            callback(undefined, result);
        }
    });
};

exports.default = GetSchoolSems;