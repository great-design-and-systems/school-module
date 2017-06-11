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

var UpdateSchoolSem = function UpdateSchoolSem(id, update, callback) {
    _classCallCheck(this, UpdateSchoolSem);

    _SchoolSem2.default.update({ _id: id }, update, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed to update school sem ' + id
            });
        } else {
            callback(undefined, result);
        }
    });
};

exports.default = UpdateSchoolSem;