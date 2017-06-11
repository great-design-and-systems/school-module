'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StudentsResource = exports.API = undefined;

var _Response = require('../../control/Response');

var _Students = require('./Students');

var _Students2 = _interopRequireDefault(_Students);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = exports.API = '/api/student/';

var StudentsResource = exports.StudentsResource = function StudentsResource(app) {
    _classCallCheck(this, StudentsResource);

    var Student = new _Students2.default();
    app.get(API + 'student-profile/:studentId', function (req, res) {
        Student.getProfileByStudentId(req.params.studentId, function (err, result) {
            if (err) {
                res.status(404).send((0, _Response.NotFound)('Student profile'));
            } else {
                res.status(200).send(result);
            }
        });
    });
    app.post(API + 'create', function (req, res) {
        Student.create(req.body, function (err, result) {
            (0, _Response.CreateStudentResponse)(req, res, err, result);
        });
    });
    app.put(API + 'update/:id', function (req, res) {
        Student.update(req.params.id, req.body, function (err, numberAffected, response) {
            if (err) {
                res.status(500).send(response);
            } else {
                console.log(numberAffected);
                res.status(200).send(numberAffected);
            }
        });
    });
    app.delete(API + 'delete/:studentId', function (req, res) {
        Student.removeStudent(req.params.studentId, function (err, result) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove student id ' + req.params.studentId + '.'
                });
            } else {
                res.status(200).send(result);
            }
        });
    });
    app.get(API + 'get-students', function (req, res) {
        Student.getStudents(req.query, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(result);
            }
        });
    });
    app.get(API + 'validate-student-id/:studentId', function (req, res) {
        Student.validateStudentId(req.params.studentId, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(result);
            }
        });
    });
};