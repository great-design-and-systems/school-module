'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Chain = require('./Chain.info');

var _fluidChains = require('fluid-chains');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StudentResource = function StudentResource(resource) {
    _classCallCheck(this, StudentResource);

    resource.get(_Chain.GET_PROFILE_BY_STUDENT_ID, '/student/student-profile/:studentId', function (req, res) {
        (0, _fluidChains.ExecuteChain)(_Chain.GET_PROFILE_BY_STUDENT_ID, {
            studentId: req.params.studentId
        }, function (result) {
            res.status(result.status()).send(result.dto());
        });
    });
    resource.post(_Chain.CREATE_STUDENT, 'student/create', function (req, res) {
        (0, _fluidChains.ExecuteChain)(_Chain.CREATE_STUDENT, {
            studentId: req.body.studentId,
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            contactNo: req.body.contactNo,
            emailAddress: req.body.emailAddress,
            department: req.body.department,
            imageId: req.body.imageId
        }, function (result) {
            res.status(result.status()).send(result.dto());
        });
    });

    resource.put(_Chain.UPDATE_STUDENT, 'student/update/:studentId', function (req, res) {
        (0, _fluidChains.ExecuteChain)(_Chain.UPDATE_STUDENT, {
            studentId: req.params.studentId,
            inputData: req.body
        }, function (result) {
            res.status(result.status()).send(result.dto());
        });
    });

    resource.delete(_Chain.DELETE_STUDENT, 'student/delete/:studentId', function (req, res) {
        (0, _fluidChains.ExecuteChain)(_Chain.DELETE_STUDENT, {
            studentId: req.params.studentId
        }, function (result) {
            res.status(result.status()).send(result.dto());
        });
    });

    resource.get(_Chain.GET_STUDENTS, 'student/get-students', function (req, res) {
        (0, _fluidChains.ExecuteChain)(_Chain.GET_STUDENTS, {
            query: req.query
        }, function (result) {
            res.status(result.status()).send(result.dto());
        });
    });

    resource.get(_Chain.VALIDATE_STUDENT_ID, 'validate-student-id/:studentId', function (req, res) {
        (0, _fluidChains.ExecuteChain)(_Chain.VALIDATE_STUDENT_ID, {
            studentId: req.params.studentId
        }, function (result) {
            res.status(result.status()).send(result.dto());
        });
    });
};

exports.default = StudentResource;