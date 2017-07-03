import * as chains from './Chain.info';
import { Chain } from 'fluid-chains';
import { GDSDomainDTO } from 'gds-stack';

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

const createSchoolProfileChain = new Chain(chains.CREATE_SCHOOL_PROFILE, (context, param, next) => {
	new CreateSchoolProfile({
		name: param.name(),
		address: param.address(),
		createdBy: param.createdBy(),
		updatedBy: param.updatedBy()
	}, (err, schoolProfile) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.CREATE_SCHOOL_PROFILE, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.CREATE_SCHOOL_PROFILE, {
				id: schoolProfile._id,
				facultyId: schoolProfile.schoolId
			}));
			next();
		}
	});
});
createSchoolProfileChain.addSpec('name', true);
createSchoolProfileChain.addSpec('address', true);
createSchoolProfileChain.addSpec('createdBy', true);
createSchoolProfileChain.addSpec('updatedBy', true);

const updateSchoolProfileChain = new Chain(chains.UPDATE_SCHOOL_PROFILE, (context, param, next) => {
	new UpdateSchoolProfile(param.schoolId(), param.inputData(), (err, schoolProfile) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.UPDATE_SCHOOL_PROFILE, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.UPDATE_SCHOOL_PROFILE, schoolProfile));
			next();
		}
	});
});
updateSchoolProfileChain.addSpec('inputData', true);
updateSchoolProfileChain.addSpec('schoolId', true);

const getProfileBySchoolIdChain = new Chain(chains.GET_SCHOOL_PROFILE, (context, param, next) => {
	new GetSchoolProfile(param.schoolId(), (err, schoolProfile) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.GET_SCHOOL_PROFILE, err));
			next();
		} else {
			context.set('status', 200);
			if (schoolProfile) {
				context.set('dto', new GDSDomainDTO(chains.GET_SCHOOL_PROFILE, schoolProfile));
			} else {
				context.set('dto', new GDSDomainDTO(chains.GET_SCHOOL_PROFILE, []));
			}
			next();
		}
	});
});
getProfileBySchoolIdChain.addSpec('schoolId', true);

const deleteSchoolProfileChain = new Chain(chains.DELETE_SCHOOL_PROFILE, (context, param, next) => {
	new DeleteSchoolProfile(param.schoolId(), (err) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.DELETE_SCHOOL_PROFILE, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.DELETE_SCHOOL_PROFILE, 'School Profile has been removed.'));
			next();
		}
	});
});
deleteSchoolProfileChain.addSpec('schoolId', true);

const createSchoolYearChain = new Chain(chains.CREATE_SCHOOL_YEAR, (context, param, next) => {
	new CreateSchoolYear({
		description: param.description(),
		dateStart: param.dateStart(),
		dateEnd: param.dateEnd(),
		schoolId: param.schoolId(),
		createdBy: param.createdBy(),
		updatedBy: param.updatedBy()
	}, (err, schoolYear) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.CREATE_SCHOOL_YEAR, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.CREATE_SCHOOL_YEAR, {
				id: schoolYear._id
			}));
			next();
		}
	});
});
createSchoolYearChain.addSpec('description', true);
createSchoolYearChain.addSpec('dateStart', true);
createSchoolYearChain.addSpec('dateEnd', true);
createSchoolYearChain.addSpec('schoolId', true);
createSchoolYearChain.addSpec('createdBy', true);
createSchoolYearChain.addSpec('updatedBy', true);

const updateSchoolYearChain = new Chain(chains.UPDATE_SCHOOL_YEAR, (context, param, next) => {
	const updateParam = param.inputData();
	updateParam.updatedOn = new Date();
	new UpdateSchoolYear(param.schoolYearId(), updateParam, (err, schoolYear) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.UPDATE_SCHOOL_YEAR, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.UPDATE_SCHOOL_YEAR, schoolYear));
			next();
		}
	});
});
updateSchoolYearChain.addSpec('inputData', true);
updateSchoolYearChain.addSpec('schoolYearId', true);

const getSchoolYearChain = new Chain(chains.GET_SCHOOL_YEAR, (context, param, next) => {
	new GetSchoolYear(param.schoolYearId(), (err, schoolYear) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.GET_SCHOOL_YEAR, err));
			next();
		} else {
			context.set('status', 200);
			if (schoolYear) {
				context.set('dto', new GDSDomainDTO(chains.GET_SCHOOL_YEAR, schoolYear));
			} else {
				context.set('dto', new GDSDomainDTO(chains.GET_SCHOOL_YEAR, []));
			}

			next();
		}
	});
});
getSchoolYearChain.addSpec('schoolYearId', true);

const getSchoolYearsChain = new Chain(chains.GET_SCHOOL_YEAR_BY_SCHOOL_ID, (context, param, next) => {
	new GetSchoolYears(param.schoolId(), (err, schoolYear) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.GET_SCHOOL_YEAR_BY_SCHOOL_ID, err));
			next();
		} else {
			context.set('status', 200);
			if (schoolYear) {
				context.set('dto', new GDSDomainDTO(chains.GET_SCHOOL_YEAR_BY_SCHOOL_ID, schoolYear));
			} else {
				context.set('dto', new GDSDomainDTO(chains.GET_SCHOOL_YEAR_BY_SCHOOL_ID, []));
			}
			next();
		}
	});
});
getSchoolYearsChain.addSpec('schoolId', true);

const deleteSchoolYearChain = new Chain(chains.DELETE_SCHOOL_YEAR, (context, param, next) => {
	new DeleteSchoolYear(param.schoolYearId(), (err) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.DELETE_SCHOOL_YEAR, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.DELETE_SCHOOL_YEAR, 'School Year has been removed.'));
			next();
		}
	});
});
deleteSchoolYearChain.addSpec('schoolYearId', true);

export default class SchoolConfigs {


	createSchoolSem(param, callback) {
		new CreateSchoolSem({
			description: param.description,
			dateStart: param.dateStart,
			dateEnd: param.dateEnd,
			schoolYearId: param.schoolYearId,
			createdBy: param.createdBy,
			updatedBy: param.createdBy
		}, callback);
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
			updatedBy: param.createdBy
		}, callback);
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
			updatedBy: param.createdBy
		}, callback);
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
			updatedBy: param.createdBy
		}, callback);
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
			updatedBy: param.createdBy
		}, callback);
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