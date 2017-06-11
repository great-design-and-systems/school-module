'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FacultiesResource = exports.API = undefined;

var _Response = require('../../control/Response');

var _Faculties = require('./Faculties');

var _Faculties2 = _interopRequireDefault(_Faculties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = exports.API = '/api/faculty/';

var FacultiesResource = exports.FacultiesResource = function FacultiesResource(app) {
    _classCallCheck(this, FacultiesResource);

    var Faculty = new _Faculties2.default();
    app.get(API + 'faculty-profile/:facultyId', function (req, res) {
        Faculty.getProfileByFacultyId(req.params.facultyId, function (err, result) {
            if (err) {
                res.status(404).send((0, _Response.NotFound)('Faculty profile'));
            } else {
                res.status(200).send(result);
            }
        });
    });
    app.post(API + 'create', function (req, res) {
        Faculty.create(req.body, function (err, result) {
            CreateResponse(req, res, err, result);
        });
    });
    app.put(API + 'update/:id', function (req, res) {
        Faculty.update(req.params.id, req.body, function (err, numberAffected, response) {
            if (err) {
                res.status(500).send(response);
            } else {
                console.log(numberAffected);
                res.status(200).send(numberAffected);
            }
        });
    });
    app.delete(API + 'delete/:facultyId', function (req, res) {
        Faculty.removeFaculty(req.params.facultyId, function (err, result) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove faculty id ' + req.params.facultyId + '.'
                });
            } else {
                res.status(200).send(result);
            }
        });
    });
    app.get(API + 'get-faculties', function (req, res) {
        Faculty.getFaculties(req.query, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(result);
            }
        });
    });
    app.get(API + 'validate-faculty-id/:facultyId', function (req, res) {
        Faculty.validateFacultyId(req.params.facultyId, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(result);
            }
        });
    });
};