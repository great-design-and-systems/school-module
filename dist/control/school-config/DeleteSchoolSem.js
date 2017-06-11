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

var DeleteSchoolSem = function DeleteSchoolSem(schoolSemId, callback) {
    _classCallCheck(this, DeleteSchoolSem);

    _SchoolSem2.default.remove({
        _id: schoolSemId
    }, function (err, result) {
        if (err) {
            new _AppLogger2.default(err).error();
            callback({
                message: 'Failed deleting schoolSemId ' + schoolSemId
            });
        } else {
            callback(null, result);
        }
    });
};

exports.default = DeleteSchoolSem;