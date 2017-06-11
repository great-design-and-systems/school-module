'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreateFacultyResponse = exports.CreateStudentResponse = exports.NotFound = undefined;

var _gdsConfig = require('gds-config');

var NotFound = exports.NotFound = function NotFound(field) {
    return new _gdsConfig.GDSDomainDTO('NOT_FOUND_ERROR', {
        message: field + ' not found'
    });
};

var CreateStudentResponse = exports.CreateStudentResponse = function CreateStudentResponse(req, res, err, result) {
    if (err) {
        res.status(500).send(new _gdsConfig.GDSDomainDTO('STUDENT_CREATION_FAILED', err.message));
    } else {
        var dto = new _gdsConfig.GDSDomainDTO('STUDENT_CREATION_COMPLETED', {
            id: result._id,
            studentId: result.studentId
        });
        dto.addGet('getProfileByStudentId', 'http://' + req.headers.host + 'api/student/' + 'student-profile/' + result.studentId);
        res.status(200).send(dto);
    }
};

var CreateFacultyResponse = exports.CreateFacultyResponse = function CreateFacultyResponse(req, res, err, result) {
    if (err) {
        res.status(500).send(new _gdsConfig.GDSDomainDTO('FACULTY_CREATION_FAILED', err.message));
    } else {
        var dto = new _gdsConfig.GDSDomainDTO('FACULTY_CREATION_COMPLETED', {
            id: result._id,
            facultyId: result.facultyId
        });
        dto.addGet('getProfileByFacultyId', 'http://' + req.headers.host + 'api/faculty/' + 'faculty-profile/' + result.facultyId);
        res.status(200).send(dto);
    }
};