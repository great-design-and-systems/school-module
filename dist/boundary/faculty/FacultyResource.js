'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Chain = require('./Chain.info');

var _fluidChains = require('fluid-chains');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FacultyResource = function FacultyResource(resource) {
    _classCallCheck(this, FacultyResource);

    resource.get(_Chain.GET_PROFILE_BY_FACULTY_ID, '/faculty/faculty-profile/:facultyId', function (req, res) {
        (0, _fluidChains.ExecuteChain)(_Chain.GET_PROFILE_BY_FACULTY_ID, {
            facultyId: req.params.facultyId
        }, function (result) {
            res.status(result.status()).send(result.dto());
        });
    });
    resource.post(_Chain.CREATE_FACULTY, 'faculty/create', function (req, res) {
        (0, _fluidChains.ExecuteChain)(_Chain.CREATE_FACULTY, {
            facultyId: req.body.facultyId,
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

    resource.put(_Chain.UPDATE_FACULTY, 'faculty/update/:facultyId', function (req, res) {
        (0, _fluidChains.ExecuteChain)(_Chain.UPDATE_FACULTY, {
            facultyId: req.params.facultyId,
            inputData: req.body
        }, function (result) {
            res.status(result.status()).send(result.dto());
        });
    });

    resource.delete(_Chain.DELETE_FACULTY, 'faculty/delete/:facultyId', function (req, res) {
        (0, _fluidChains.ExecuteChain)(_Chain.DELETE_FACULTY, {
            facultyId: req.params.facultyId
        }, function (result) {
            res.status(result.status()).send(result.dto());
        });
    });

    resource.get(_Chain.GET_FACULTIES, 'faculty/get-faculties', function (req, res) {
        (0, _fluidChains.ExecuteChain)(_Chain.GET_FACULTIES, {
            query: req.query
        }, function (result) {
            res.status(result.status()).send(result.dto());
        });
    });

    resource.get(_Chain.VALIDATE_FACULTY_ID, 'validate-faculty-id/:facultyId', function (req, res) {
        (0, _fluidChains.ExecuteChain)(_Chain.VALIDATE_FACULTY_ID, {
            facultyId: req.params.facultyId
        }, function (result) {
            res.status(result.status()).send(result.dto());
        });
    });
};

exports.default = FacultyResource;