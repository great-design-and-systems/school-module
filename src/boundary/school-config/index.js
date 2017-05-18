import { NotFound, CreateFacultyResponse } from '../../control/Response';

import SchoolConfigs from './SchoolConfigs';

export const API = '/api/school-config/';

export class SchoolConfigResource {
    constructor(app) {
        const SchoolConfig = new SchoolConfigs();

        app.post(API + 'create-school-profile', (req, res) => {
            SchoolConfig.createSchoolProfile(req.body, (err, result) => {
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

        app.put(API + 'update-school-profile/:schoolId', (req, res) => {
            SchoolConfig.updateSchoolProfile(req.params.schoolId, req.body, (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({
                        message: 'ok'
                    });
                }
            });
        });

        app.get(API + 'get-school-profile/:schoolId', (req, res) => {
            SchoolConfig.getSchoolProfile(req.params.schoolId, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "School Profile not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.delete(API + 'delete-school-profile/:schoolId', (req, res) => {
            SchoolConfig.deleteSchoolProfile(req.params.schoolId, (err) => {
                if (err) {
                    res.status(500).send({
                        message: 'Failed to remove school profile id ' + req.params.schoolId + '.'
                    });
                } else {
                    res.status(200).send({ message: 'ok' });
                }
            });
        });
        app.post(API + 'create-school-year', (req, res) => {
            SchoolConfig.createSchoolYear(req.body, (err, result) => {
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

        app.put(API + 'update-school-year/:schoolYearId', (req, res) => {
            SchoolConfig.updateSchoolYear(req.params.schoolYearId, req.body, (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({
                        message: 'ok'
                    });
                }
            });
        });

        app.get(API + 'get-school-year/:schoolYearId', (req, res) => {
            SchoolConfig.getSchoolYear(req.params.schoolYearId, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "School Year not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.get(API + 'get-school-year-by-school/:schoolId', (req, res) => {
            SchoolConfig.getSchoolYears(req.params, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "School Year not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.delete(API + 'delete-school-year/:schoolYearId', (req, res) => {
            SchoolConfig.deleteSchoolYear(req.params.schoolYearId, (err) => {
                if (err) {
                    res.status(500).send({
                        message: 'Failed to remove school year id ' + req.params.schoolYearId + '.'
                    });
                } else {
                    res.status(200).send({ message: 'ok' });
                }
            });
        });
        app.post(API + 'create-school-sem', (req, res) => {
            SchoolConfig.createSchoolSem(req.body, (err, result) => {
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

        app.put(API + 'update-school-sem/:schoolSemId', (req, res) => {
            SchoolConfig.updateSchoolSem(req.params.schoolSemId, req.body, (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({
                        message: 'ok'
                    });
                }
            });
        });

        app.get(API + 'get-school-sem/:schoolSemId', (req, res) => {
            SchoolConfig.getSchoolSem(req.params.schoolSemId, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Semester not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.get(API + 'get-school-sem-by-school-year/:schoolYearId', (req, res) => {
            SchoolConfig.getSchoolSems(req.params, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "School Sem not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.delete(API + 'delete-school-sem/:schoolSemId', (req, res) => {
            SchoolConfig.deleteSchoolSem(req.params.schoolSemId, (err) => {
                if (err) {
                    res.status(500).send({
                        message: 'Failed to remove school sem id ' + req.params.schoolSemId + '.'
                    });
                } else {
                    res.status(200).send({ message: 'ok' });
                }
            });
        });
        app.post(API + 'create-education-level', (req, res) => {
            SchoolConfig.createEducationLevel(req.body, (err, result) => {
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

        app.put(API + 'update-education-level/:educationLevelId', (req, res) => {
            SchoolConfig.updateEducationLevel(req.params.educationLevelId, req.body, (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({
                        message: 'ok'
                    });
                }
            });
        });

        app.get(API + 'get-education-level/:educationLevelId', (req, res) => {
            SchoolConfig.getEducationLevel(req.params.educationLevelId, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Education Level not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.get(API + 'get-education-level-by-school/:schoolId', (req, res) => {
            SchoolConfig.getEducationLevels(req.params, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Education Level not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.delete(API + 'delete-education-level/:educationLevelId', (req, res) => {
            SchoolConfig.deleteEducationLevel(req.params.educationLevelId, (err) => {
                if (err) {
                    res.status(500).send({
                        message: 'Failed to remove education level id ' + req.params.educationLevelId + '.'
                    });
                } else {
                    res.status(200).send({ message: 'ok' });
                }
            });
        });
        app.post(API + 'create-department', (req, res) => {
            SchoolConfig.createDepartment(req.body, (err, result) => {
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

        app.put(API + 'update-department/:departmentId', (req, res) => {
            SchoolConfig.updateDepartment(req.params.departmentId, req.body, (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({
                        message: 'ok'
                    });
                }
            });
        });

        app.get(API + 'get-department/:departmentId', (req, res) => {
            SchoolConfig.getDepartment(req.params.departmentId, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Department not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.get(API + 'get-department-by-school/:schoolId', (req, res) => {
            SchoolConfig.getDepartments(req.params, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Department not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.delete(API + 'delete-department/:departmentId', (req, res) => {
            SchoolConfig.deleteDepartment(req.params.departmentId, (err) => {
                if (err) {
                    res.status(500).send({
                        message: 'Failed to remove department id ' + req.params.departmentId + '.'
                    });
                } else {
                    res.status(200).send({ message: 'ok' });
                }
            });
        });

        app.post(API + 'create-theme', (req, res) => {
            SchoolConfig.createTheme(req.body, (err, result) => {
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

        app.put(API + 'update-theme/:themeId', (req, res) => {
            SchoolConfig.updateTheme(req.params.themeId, req.body, (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({
                        message: 'ok'
                    });
                }
            });
        });

        app.get(API + 'get-theme/:themeId', (req, res) => {
            SchoolConfig.getTheme(req.params.themeId, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Theme not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.get(API + 'get-theme-by-school/:schoolId', (req, res) => {
            SchoolConfig.getThemes(req.params, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Theme not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.delete(API + 'delete-theme/:themeId', (req, res) => {
            SchoolConfig.deleteTheme(req.params.themeId, (err) => {
                if (err) {
                    res.status(500).send({
                        message: 'Failed to remove theme id ' + req.params.themeId + '.'
                    });
                } else {
                    res.status(200).send({ message: 'ok' });
                }
            });
        });

        app.post(API + 'create-code', (req, res) => {
            SchoolConfig.createCode(req.body, (err, result) => {
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

        app.put(API + 'update-code/:codeId', (req, res) => {
            SchoolConfig.updateCode(req.params.codeId, req.body, (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({
                        message: 'ok'
                    });
                }
            });
        });

        app.get(API + 'get-codes/:codeType/:schoolId', (req, res) => {
            SchoolConfig.getCodes(req.params, (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.get(API + 'get-code/:schoolId/:codeType/:codeName', (req, res) => {
            SchoolConfig.getCode(req.params, (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.delete(API + 'delete-code/:codeId', (req, res) => {
            SchoolConfig.deleteCode(req.params.codeId, (err) => {
                if (err) {
                    res.status(500).send({
                        message: 'Failed to remove code id ' + req.params.codeId + '.'
                    });
                } else {
                    res.status(200).send({ message: 'ok' });
                }
            });
        });

    }
}