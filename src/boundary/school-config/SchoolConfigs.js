import CreateSchoolProfile from '../../control/school-config/CreateSchoolProfile';
import UpdateSchoolProfile from '../../control/school-config/UpdateSchoolProfile';
import GetSchoolProfile from '../../control/school-config/GetSchoolProfileBySchoolId';
import DeleteSchoolProfile from '../../control/school-config/DeleteSchoolProfile';
import CreateSchoolYear from '../../control/school-config/CreateSchoolYear';
import UpdateSchoolYearfrom from '../../control/school-config/UpdateSchoolYear';
import GetSchoolYear from '../../control/school-config/GetSchoolYearBySchoolYearId';
import GetSchoolYears from '../../control/school-config/GetSchoolYears';
import DeleteSchoolYear from '../../control/school-config/DeleteSchoolYear';
import CreateSchoolSem from '../../control/school-config/CreateSchoolSem';
import UpdateSchoolSemfrom from '../../control/school-config/UpdateSchoolSem';
import GetSchoolSem from '../../control/school-config/GetSchoolSemBySchoolSemId';
import GetSchoolSems from '../../control/school-config/GetSchoolSems';
import DeleteSchoolSem from '../../control/school-config/DeleteSchoolSem';
import CreateEducationLevel from '../../control/school-config/CreateEducationLevel';
import UpdateEducationLevelfrom from '../../control/school-config/UpdateEducationLevel';
import GetEducationLevel from '../../control/school-config/GetEducationLevelByEducationLevelId';
import GetEducationLevels from '../../control/school-config/GetEducationLevels';
import DeleteEducationLevel from '../../control/school-config/DeleteEducationLevel';
import CreateDepartment from '../../control/school-config/CreateDepartment';
import UpdateDepartmentfrom from '../../control/school-config/UpdateDepartment';
import GetDepartment from '../../control/school-config/GetDepartmentByDepartmentId';
import GetDepartments from '../../control/school-config/GetDepartments';
import DeleteDepartment from '../../control/school-config/DeleteDepartment';
import CreateTheme from '../../control/school-config/CreateTheme';
import UpdateThemefrom from '../../control/school-config/UpdateTheme';
import GetTheme from '../../control/school-config/GetThemeByThemeId';
import GetThemes from '../../control/school-config/GetThemes';
import DeleteTheme from '../../control/school-config/DeleteTheme';
import CreateCode from '../../control/school-config/CreateCode';
import UpdateCodefrom from '../../control/school-config/UpdateCode';
import GetCodes from '../../control/school-config/GetCodes';
import GetCode from '../../control/school-config/GetCode';
import DeleteCode from '../../control/school-config/DeleteCode';

export default class SchoolConfigs {
	createSchoolProfile(param, callback) {
		new CreateSchoolProfile({
			name: param.name,
			address: param.address,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    }
    updateSchoolProfile(schoolId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateSchoolProfile(schoolId, updateParam, callback);
    }
    getSchoolProfile(schoolId, callback) {
        new GetSchoolProfile(schoolId, (err, result) => {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(null, []);
        		}
        	}
        });
    }
    deleteSchoolProfile(schoolId, callback) {
        new DeleteSchoolProfile(schoolId, callback);
    }
	createSchoolYear(param, callback) {
		new CreateSchoolYear({
			description: param.description,
			dateStart: param.dateStart,
			dateEnd: param.dateEnd,
			schoolId: param.schoolId,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    }
    updateSchoolYear(schoolYearId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateSchoolYear(schoolYearId, updateParam, callback);
    }
    getSchoolYear(schoolYearId, callback) {
        new GetSchoolYear(schoolYearId, (err, result) => {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(null, []);
        		}
        	}
        });
    }
    getSchoolYears(params, callback) {
        new GetSchoolYears(params, (err, result) => {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(null, []);
        		}
        	}
        });
    }
    deleteSchoolYear(schoolYearId, callback) {
        new DeleteSchoolYear(schoolYearId, callback);
    }
	createSchoolSem(param, callback) {
		new CreateSchoolSem({
			description: param.description,
			dateStart: param.dateStart,
			dateEnd: param.dateEnd,
			schoolYearId: param.schoolYearId,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    }
    updateSchoolSem(schoolSemId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateSchoolSem(schoolSemId, updateParam, callback);
    }
    getSchoolSem(schoolSemId, callback) {
        new GetSchoolSem(schoolSemId, (err, result) => {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(null, []);
        		}
        	}
        });
    }
    getSchoolSems(params, callback) {
        new GetSchoolSems(params, (err, result) => {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(null, []);
        		}
        	}
        });
    }
    deleteSchoolSem(schoolSemId, callback) {
        new DeleteSchoolSem(schoolSemId, callback);
    }
	createEducationLevel(param, callback) {
		new CreateEducationLevel({
			name: param.name,
			description: param.description,
			schoolId: param.schoolId,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    }
    updateEducationLevel(educationLevelId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateEducationLevel(educationLevelId, updateParam, callback);
    }
    getEducationLevel(educationLevelId, callback) {
        new GetEducationLevel(educationLevelId, (err, result) => {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(null, []);
        		}
        	}
        });
    }
    getEducationLevels(params, callback) {
        new GetEducationLevels(params, (err, result) => {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(null, []);
        		}
        	}
        });
    }
    deleteEducationLevel(educationLevelId, callback) {
        new DeleteEducationLevel(educationLevelId, callback);
    }
    createDepartment(param, callback) {
		new CreateDepartment({
			name: param.name,
			description: param.description,
			schoolId: param.schoolId,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    }
    updateDepartment(departmentId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateDepartment(departmentId, updateParam, callback);
    }
    getDepartment(departmentId, callback) {
        new GetDepartment(departmentId, (err, result) => {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(null, []);
        		}
        	}
        });
    }
    getDepartments(params, callback) {
        new GetDepartments(params, (err, result) => {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(null, []);
        		}
        	}
        });
    }
    deleteDepartment(departmentId, callback) {
        new DeleteDepartment(departmentId, callback);
    }
    createTheme(param, callback) {
		new CreateTheme({
			templateName: param.templateName,
			description: param.description,
			logo: param.logo,
			schoolId: param.schoolId,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    }
    updateTheme(themeId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateTheme(themeId, updateParam, callback);
    }
    getTheme(themeId, callback) {
        new GetTheme(themeId, (err, result) => {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(null, []);
        		}
        	}
        });
    }
    getThemes(params, callback) {
        new GetThemes(params, (err, result) => {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(null, []);
        		}
        	}
        });
    }
    deleteTheme(themeId, callback) {
        new DeleteTheme(themeId, callback);
    }
    createCode(param, callback) {
		new CreateCode({
			codeType: param.codeType,
			codeName: param.codeName,
			codeValue: param.codeValue,
			schoolId: param.schoolId,
			createdBy: param.createdBy,
			updatedBy: param.createdBy}, callback);
    }
    updateCode(codeId, updateParam, callback) {
    	updateParam.updatedOn = new Date();
    	new UpdateCode(codeId, updateParam, callback);
    }
    getCodes(params, callback) {
        new GetCodes(params, (err, result) => {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(null, []);
        		}
        	}
        });
    }
    getCode(params, callback) {
        new GetCode(params, (err, result) => {
        	if (err) {
        		callback(err);
        	} else {
        		if (result) {
        			callback(null, result);
        		} else {
        			callback(null, []);
        		}
        	}
        });
    }
    deleteCode(codeId, callback) {
        new DeleteCode(codeId, callback);
    }
}