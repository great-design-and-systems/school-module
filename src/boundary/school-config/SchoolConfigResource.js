import * as Chain from './Chain.info';

import { ExecuteChain } from 'fluid-chains';

export default class SchoolConfigResource {
    constructor(resource) {
        resource.post(Chain.CREATE_SCHOOL_PROFILE, 'school-config/create-school-profile', (req, res) => {
            ExecuteChain(Chain.CREATE_SCHOOL_PROFILE, {
                name: req.body.name,
                address: req.body.address,
                createdBy: req.body.createdBy,
                updatedBy: req.body.createdBy
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.put(Chain.UPDATE_SCHOOL_PROFILE, 'school-config/update-school-profile/:schoolId', (req, res) => {
            ExecuteChain(Chain.UPDATE_SCHOOL_PROFILE, {
                schoolId: req.params.schoolId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_SCHOOL_PROFILE, 'school-config/get-school-profile/:schoolId', (req, res) => {
            ExecuteChain(Chain.GET_SCHOOL_PROFILE, {
                schoolId: req.params.schoolId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.delete(Chain.DELETE_SCHOOL_PROFILE, 'school-config/delete-school-profile/:schoolId', (req, res) => {
            ExecuteChain(Chain.DELETE_SCHOOL_PROFILE, {
                schoolId: req.params.schoolId
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        });
        resource.post(Chain.CREATE_SCHOOL_YEAR, 'school-config/create-school-year', (req, res) => {
            ExecuteChain(Chain.CREATE_SCHOOL_YEAR, {
                description: req.body.description,
                dateStart: req.body.dateStart,
                dateEnd: req.body.dateEnd,
                schoolId: req.body.schoolId,
                createdBy: req.body.createdBy,
                updatedBy: req.body.createdBy
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.put(Chain.UPDATE_SCHOOL_YEAR, 'school-config/update-school-year/:schoolYearId', (req, res) => {
            ExecuteChain(Chain.UPDATE_SCHOOL_YEAR, {
                schoschoolYearIdolId: req.params.schoolYearId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_SCHOOL_YEAR, 'school-config/get-school-year/:schoolYearId', (req, res) => {
            ExecuteChain(Chain.GET_SCHOOL_YEAR, {
                schoolYearId: req.params.schoolYearId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_SCHOOL_YEAR_BY_SCHOOL_ID, 'school-config/get-school-year-by-school/:schoolId', (req, res) => {
            ExecuteChain(Chain.GET_SCHOOL_YEAR_BY_SCHOOL_ID, {
                schoolId: req.params.schoolId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.delete(Chain.DELETE_SCHOOL_YEAR, 'school-config/delete-school-year/:schoolYearId', (req, res) => {
            ExecuteChain(Chain.DELETE_SCHOOL_YEAR, {
                schoolYearId: req.params.schoolYearId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });
        resource.post(API, 'school-config/create-school-sem', (req, res) => {
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

        resource.put(API, 'school-config/update-school-sem/:schoolSemId', (req, res) => {
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

        resource.get(API, 'school-config/get-school-sem/:schoolSemId', (req, res) => {
            SchoolConfig.getSchoolSem(req.params.schoolSemId, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Semester not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        resource.get(API, 'school-config/get-school-sem-by-school-year/:schoolYearId', (req, res) => {
            SchoolConfig.getSchoolSems(req.params, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "School Sem not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        resource.delete(API, 'school-config/delete-school-sem/:schoolSemId', (req, res) => {
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
        resource.post(API, 'school-config/create-education-level', (req, res) => {
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

        resource.put(API, 'school-config/update-education-level/:educationLevelId', (req, res) => {
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

        resource.get(API, 'school-config/get-education-level/:educationLevelId', (req, res) => {
            SchoolConfig.getEducationLevel(req.params.educationLevelId, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Education Level not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        resource.get(API, 'school-config/get-education-level-by-school/:schoolId', (req, res) => {
            SchoolConfig.getEducationLevels(req.params, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Education Level not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        resource.delete(API, 'school-config/delete-education-level/:educationLevelId', (req, res) => {
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
        resource.post(API, 'school-config/create-department', (req, res) => {
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

        resource.put(API, 'school-config/update-department/:departmentId', (req, res) => {
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

        resource.get(API, 'school-config/get-department/:departmentId', (req, res) => {
            SchoolConfig.getDepartment(req.params.departmentId, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Department not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        resource.get(API, 'school-config/get-department-by-school/:schoolId', (req, res) => {
            SchoolConfig.getDepartments(req.params, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Department not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        resource.delete(API, 'school-config/delete-department/:departmentId', (req, res) => {
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

        resource.post(API, 'school-config/create-theme', (req, res) => {
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

        resource.put(API, 'school-config/update-theme/:themeId', (req, res) => {
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

        resource.get(API, 'school-config/get-theme/:themeId', (req, res) => {
            SchoolConfig.getTheme(req.params.themeId, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Theme not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        resource.get(API, 'school-config/get-theme-by-school/:schoolId', (req, res) => {
            SchoolConfig.getThemes(req.params, (err, result) => {
                if (err) {
                    res.status(500).send({ message: "Theme not found." });
                } else {
                    res.status(200).send(result);
                }
            });
        });

        resource.delete(API, 'school-config/delete-theme/:themeId', (req, res) => {
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

        resource.post(API, 'school-config/create-code', (req, res) => {
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

        resource.put(API, 'school-config/update-code/:codeId', (req, res) => {
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

        resource.get(API, 'school-config/get-codes/:codeType/:schoolId', (req, res) => {
            SchoolConfig.getCodes(req.params, (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(result);
                }
            });
        });

        resource.get(API, 'school-config/get-code/:schoolId/:codeType/:codeName', (req, res) => {
            SchoolConfig.getCode(req.params, (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(result);
                }
            });
        });

        resource.delete(API, 'school-config/delete-code/:codeId', (req, res) => {
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