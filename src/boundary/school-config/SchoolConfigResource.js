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
                schoolYearId: req.params.schoolYearId,
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
        resource.post(Chain.CREATE_SCHOOL_SEM, 'school-config/create-school-sem', (req, res) => {
            ExecuteChain(Chain.CREATE_SCHOOL_SEM, {
                description: req.body.description,
                dateStart: req.body.dateStart,
                dateEnd: req.body.dateEnd,
                schoolYearId: req.body.schoolYearId,
                createdBy: req.body.createdBy,
                updatedBy: req.body.createdBy
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.put(Chain.UPDATE_SCHOOL_SEM, 'school-config/update-school-sem/:schoolSemId', (req, res) => {
            ExecuteChain(Chain.UPDATE_SCHOOL_SEM, {
                schoolSemId: req.params.schoolSemId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_SCHOOL_SEM, 'school-config/get-school-sem/:schoolSemId', (req, res) => {
            ExecuteChain(Chain.GET_SCHOOL_SEM, {
                schoolSemId: req.params.schoolSemId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_SCHOOL_SEM_BY_SCHOOL_YEAR_ID, 'school-config/get-school-sem-by-school-year/:schoolYearId', (req, res) => {
            ExecuteChain(Chain.GET_SCHOOL_SEM_BY_SCHOOL_YEAR_ID, {
                schoolYearId: req.params.schoolYearId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.delete(Chain.DELETE_SCHOOL_SEM, 'school-config/delete-school-sem/:schoolSemId', (req, res) => {
            ExecuteChain(Chain.DELETE_SCHOOL_SEM, {
                schoolSemId: req.params.schoolSemId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });
        resource.post(Chain.CREATE_EDUCATION_LEVEL, 'school-config/create-education-level', (req, res) => {
            ExecuteChain(Chain.CREATE_EDUCATION_LEVEL, {
                name: req.body.name,
                description: req.body.description,
                schoolId: req.body.schoolId,
                createdBy: req.body.createdBy,
                updatedBy: req.body.createdBy
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.put(Chain.UPDATE_EDUCATION_LEVEL, 'school-config/update-education-level/:educationLevelId', (req, res) => {
            ExecuteChain(Chain.UPDATE_EDUCATION_LEVEL, {
                educationLevelId: req.params.educationLevelId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_EDUCATION_LEVEL, 'school-config/get-education-level/:educationLevelId', (req, res) => {
            ExecuteChain(Chain.GET_EDUCATION_LEVEL, {
                educationLevelId: req.params.educationLevelId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_EDUCATION_LEVEL_BY_SCHOOL_ID, 'school-config/get-education-level-by-school/:schoolId', (req, res) => {
            ExecuteChain(Chain.GET_EDUCATION_LEVEL_BY_SCHOOL_ID, {
                schoolId: req.params.schoolId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.delete(Chain.DELETE_EDUCATION_LEVEL, 'school-config/delete-education-level/:educationLevelId', (req, res) => {
            ExecuteChain(Chain.DELETE_EDUCATION_LEVEL, {
                educationLevelId: req.params.educationLevelId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });
        resource.post(Chain.CREATE_DEPARTMENT, 'school-config/create-department', (req, res) => {
            ExecuteChain(Chain.CREATE_DEPARTMENT, {
                name: req.body.name,
                description: req.body.description,
                schoolId: req.body.schoolId,
                createdBy: req.body.createdBy,
                updatedBy: req.body.createdBy
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.put(Chain.UPDATE_DEPARTMENT, 'school-config/update-department/:departmentId', (req, res) => {
            ExecuteChain(Chain.UPDATE_DEPARTMENT, {
                departmentId: req.params.departmentId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_DEPARTMENT, 'school-config/get-department/:departmentId', (req, res) => {
            ExecuteChain(Chain.GET_DEPARTMENT, {
                departmentId: req.params.departmentId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_DEPARTMENT_BY_SCHOOL_ID, 'school-config/get-department-by-school/:schoolId', (req, res) => {
            ExecuteChain(Chain.GET_DEPARTMENT_BY_SCHOOL_ID, {
                schoolId: req.params.schoolId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.delete(Chain.DELETE_DEPARTMENT, 'school-config/delete-department/:departmentId', (req, res) => {
            ExecuteChain(Chain.DELETE_DEPARTMENT, {
                departmentId: req.params.departmentId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.post(Chain.CREATE_THEME, 'school-config/create-theme', (req, res) => {
            ExecuteChain(Chain.CREATE_THEME, {
                templateName: req.body.templateName,
                description: req.body.description,
                logo: req.body.logo,
                schoolId: req.body.schoolId,
                createdBy: req.body.createdBy,
                updatedBy: req.body.createdBy
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.put(Chain.UPDATE_THEME, 'school-config/update-theme/:themeId', (req, res) => {
            ExecuteChain(Chain.UPDATE_THEME, {
                themeId: req.params.themeId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_THEME, 'school-config/get-theme/:themeId', (req, res) => {
            ExecuteChain(Chain.GET_THEME, {
                themeId: req.params.themeId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_THEME_BY_SCHOOL_ID, 'school-config/get-theme-by-school/:schoolId', (req, res) => {
            ExecuteChain(Chain.GET_THEME_BY_SCHOOL_ID, {
                schoolId: req.params.schoolId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.delete(Chain.DELETE_THEME, 'school-config/delete-theme/:themeId', (req, res) => {
            ExecuteChain(Chain.DELETE_THEME, {
                themeId: req.params.themeId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.post(Chain.CREATE_CODE, 'school-config/create-code', (req, res) => {
            ExecuteChain(Chain.CREATE_CODE, {
                codeType: req.body.codeType,
                codeName: req.body.codeName,
                codeValue: req.body.codeValue,
                schoolId: req.body.schoolId,
                createdBy: req.body.createdBy,
                updatedBy: req.body.createdBy
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.put(Chain.UPDATE_CODE, 'school-config/update-code/:codeId', (req, res) => {
            ExecuteChain(Chain.UPDATE_CODE, {
                codeId: req.params.codeId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_CODES, 'school-config/get-codes/:codeType/:schoolId', (req, res) => {
            ExecuteChain(Chain.GET_CODES, req.params, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.get(Chain.GET_CODE, 'school-config/get-code/:schoolId/:codeType/:codeName', (req, res) => {
            ExecuteChain(Chain.GET_CODE, req.params, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.delete(Chain.DELETE_CODE, 'school-config/delete-code/:codeId', (req, res) => {
            ExecuteChain(Chain.DELETE_CODE, {
                codeId: req.params.codeId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

    }
}