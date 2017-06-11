'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SchoolConfigResource = exports.API = undefined;

var _Response = require('../../control/Response');

var _SchoolConfigs = require('./SchoolConfigs');

var _SchoolConfigs2 = _interopRequireDefault(_SchoolConfigs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = exports.API = '/api/school-config/';

var SchoolConfigResource = exports.SchoolConfigResource = function SchoolConfigResource(app) {
    _classCallCheck(this, SchoolConfigResource);

    var SchoolConfig = new _SchoolConfigs2.default();

    app.post(API + 'create-school-profile', function (req, res) {
        SchoolConfig.createSchoolProfile(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-school-profile/:schoolId', function (req, res) {
        SchoolConfig.updateSchoolProfile(req.params.schoolId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-school-profile/:schoolId', function (req, res) {
        SchoolConfig.getSchoolProfile(req.params.schoolId, function (err, result) {
            if (err) {
                res.status(500).send({ message: "School Profile not found." });
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.delete(API + 'delete-school-profile/:schoolId', function (req, res) {
        SchoolConfig.deleteSchoolProfile(req.params.schoolId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove school profile id ' + req.params.schoolId + '.'
                });
            } else {
                res.status(200).send({ message: 'ok' });
            }
        });
    });
    app.post(API + 'create-school-year', function (req, res) {
        SchoolConfig.createSchoolYear(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-school-year/:schoolYearId', function (req, res) {
        SchoolConfig.updateSchoolYear(req.params.schoolYearId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-school-year/:schoolYearId', function (req, res) {
        SchoolConfig.getSchoolYear(req.params.schoolYearId, function (err, result) {
            if (err) {
                res.status(500).send({ message: "School Year not found." });
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.get(API + 'get-school-year-by-school/:schoolId', function (req, res) {
        SchoolConfig.getSchoolYears(req.params, function (err, result) {
            if (err) {
                res.status(500).send({ message: "School Year not found." });
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.delete(API + 'delete-school-year/:schoolYearId', function (req, res) {
        SchoolConfig.deleteSchoolYear(req.params.schoolYearId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove school year id ' + req.params.schoolYearId + '.'
                });
            } else {
                res.status(200).send({ message: 'ok' });
            }
        });
    });
    app.post(API + 'create-school-sem', function (req, res) {
        SchoolConfig.createSchoolSem(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-school-sem/:schoolSemId', function (req, res) {
        SchoolConfig.updateSchoolSem(req.params.schoolSemId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-school-sem/:schoolSemId', function (req, res) {
        SchoolConfig.getSchoolSem(req.params.schoolSemId, function (err, result) {
            if (err) {
                res.status(500).send({ message: "Semester not found." });
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.get(API + 'get-school-sem-by-school-year/:schoolYearId', function (req, res) {
        SchoolConfig.getSchoolSems(req.params, function (err, result) {
            if (err) {
                res.status(500).send({ message: "School Sem not found." });
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.delete(API + 'delete-school-sem/:schoolSemId', function (req, res) {
        SchoolConfig.deleteSchoolSem(req.params.schoolSemId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove school sem id ' + req.params.schoolSemId + '.'
                });
            } else {
                res.status(200).send({ message: 'ok' });
            }
        });
    });
    app.post(API + 'create-education-level', function (req, res) {
        SchoolConfig.createEducationLevel(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-education-level/:educationLevelId', function (req, res) {
        SchoolConfig.updateEducationLevel(req.params.educationLevelId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-education-level/:educationLevelId', function (req, res) {
        SchoolConfig.getEducationLevel(req.params.educationLevelId, function (err, result) {
            if (err) {
                res.status(500).send({ message: "Education Level not found." });
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.get(API + 'get-education-level-by-school/:schoolId', function (req, res) {
        SchoolConfig.getEducationLevels(req.params, function (err, result) {
            if (err) {
                res.status(500).send({ message: "Education Level not found." });
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.delete(API + 'delete-education-level/:educationLevelId', function (req, res) {
        SchoolConfig.deleteEducationLevel(req.params.educationLevelId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove education level id ' + req.params.educationLevelId + '.'
                });
            } else {
                res.status(200).send({ message: 'ok' });
            }
        });
    });
    app.post(API + 'create-department', function (req, res) {
        SchoolConfig.createDepartment(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-department/:departmentId', function (req, res) {
        SchoolConfig.updateDepartment(req.params.departmentId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-department/:departmentId', function (req, res) {
        SchoolConfig.getDepartment(req.params.departmentId, function (err, result) {
            if (err) {
                res.status(500).send({ message: "Department not found." });
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.get(API + 'get-department-by-school/:schoolId', function (req, res) {
        SchoolConfig.getDepartments(req.params, function (err, result) {
            if (err) {
                res.status(500).send({ message: "Department not found." });
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.delete(API + 'delete-department/:departmentId', function (req, res) {
        SchoolConfig.deleteDepartment(req.params.departmentId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove department id ' + req.params.departmentId + '.'
                });
            } else {
                res.status(200).send({ message: 'ok' });
            }
        });
    });

    app.post(API + 'create-theme', function (req, res) {
        SchoolConfig.createTheme(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-theme/:themeId', function (req, res) {
        SchoolConfig.updateTheme(req.params.themeId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-theme/:themeId', function (req, res) {
        SchoolConfig.getTheme(req.params.themeId, function (err, result) {
            if (err) {
                res.status(500).send({ message: "Theme not found." });
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.get(API + 'get-theme-by-school/:schoolId', function (req, res) {
        SchoolConfig.getThemes(req.params, function (err, result) {
            if (err) {
                res.status(500).send({ message: "Theme not found." });
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.delete(API + 'delete-theme/:themeId', function (req, res) {
        SchoolConfig.deleteTheme(req.params.themeId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove theme id ' + req.params.themeId + '.'
                });
            } else {
                res.status(200).send({ message: 'ok' });
            }
        });
    });

    app.post(API + 'create-code', function (req, res) {
        SchoolConfig.createCode(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result._id
                });
            }
        });
    });

    app.put(API + 'update-code/:codeId', function (req, res) {
        SchoolConfig.updateCode(req.params.codeId, req.body, function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    message: 'ok'
                });
            }
        });
    });

    app.get(API + 'get-codes/:codeType/:schoolId', function (req, res) {
        SchoolConfig.getCodes(req.params, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.get(API + 'get-code/:schoolId/:codeType/:codeName', function (req, res) {
        SchoolConfig.getCode(req.params, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(result);
            }
        });
    });

    app.delete(API + 'delete-code/:codeId', function (req, res) {
        SchoolConfig.deleteCode(req.params.codeId, function (err) {
            if (err) {
                res.status(500).send({
                    message: 'Failed to remove code id ' + req.params.codeId + '.'
                });
            } else {
                res.status(200).send({ message: 'ok' });
            }
        });
    });
};