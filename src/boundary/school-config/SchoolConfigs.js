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

const createSchoolSemChain = new Chain(chains.CREATE_SCHOOL_SEM, (context, param, next) => {
	new CreateSchoolSem({
		description: param.description(),
		dateStart: param.dateStart(),
		dateEnd: param.dateEnd(),
		schoolYearId: param.schoolYearId,
		createdBy: param.createdBy(),
		updatedBy: param.updatedBy()
	}, (err, schoolSem) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.CREATE_SCHOOL_SEM, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.CREATE_SCHOOL_SEM, {
				id: schoolSem._id
			}));
			next();
		}
	});
});
createSchoolSemChain.addSpec('description', true);
createSchoolSemChain.addSpec('dateStart', true);
createSchoolSemChain.addSpec('dateEnd', true);
createSchoolSemChain.addSpec('schoolYearId', true);
createSchoolSemChain.addSpec('createdBy', true);
createSchoolSemChain.addSpec('updatedBy', true);

const updateSchoolSemChain = new Chain(chains.UPDATE_SCHOOL_SEM, (context, param, next) => {
	const updateParam = param.inputData();
	updateParam.updatedOn = new Date();
	new UpdateSchoolSem(param.schoolSemId(), updateParam, (err, schoolSem) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.UPDATE_SCHOOL_SEM, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.UPDATE_SCHOOL_SEM, schoolSem));
			next();
		}
	});
});
updateSchoolSemChain.addSpec('inputData', true);
updateSchoolSemChain.addSpec('schoolSemId', true);

const getSchoolSemChain = new Chain(chains.GET_SCHOOL_SEM, (context, param, next) => {
	new GetSchoolSem(param.schoolSemId(), (err, schoolSem) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.GET_SCHOOL_SEM, err));
			next();
		} else {
			context.set('status', 200);
			if (schoolSem) {
				context.set('dto', new GDSDomainDTO(chains.GET_SCHOOL_SEM, schoolSem));
			} else {
				context.set('dto', new GDSDomainDTO(chains.GET_SCHOOL_SEM, []));
			}

			next();
		}
	});
});
getSchoolSemChain.addSpec('schoolSemId', true);

const getSchoolSemsChain = new Chain(chains.GET_SCHOOL_SEM_BY_SCHOOL_YEAR_ID, (context, param, next) => {
	new GetSchoolSems(param.schoolSemId(), (err, schoolSem) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.GET_SCHOOL_SEM_BY_SCHOOL_YEAR_ID, err));
			next();
		} else {
			context.set('status', 200);
			if (schoolSem) {
				context.set('dto', new GDSDomainDTO(chains.GET_SCHOOL_SEM_BY_SCHOOL_YEAR_ID, schoolSem));
			} else {
				context.set('dto', new GDSDomainDTO(chains.GET_SCHOOL_SEM_BY_SCHOOL_YEAR_ID, []));
			}
			next();
		}
	});
});
getSchoolSemsChain.addSpec('schoolSemId', true);

const deleteSchoolSemChain = new Chain(chains.DELETE_SCHOOL_SEM, (context, param, next) => {
	new DeleteSchoolSem(param.schoolSemId(), (err) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.DELETE_SCHOOL_SEM, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.DELETE_SCHOOL_SEM, 'School Sem has been removed.'));
			next();
		}
	});
});
deleteSchoolSemChain.addSpec('schoolSemId', true);

const createEducationLevelChain = new Chain(chains.CREATE_EDUCATION_LEVEL, (context, param, next) => {
	new CreateEducationLevel({
		name: param.name(),
		description: param.description(),
		schoolId: param.schoolId(),
		createdBy: param.createdBy(),
		updatedBy: param.updatedBy()
	}, (err, educationLevel) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.CREATE_EDUCATION_LEVEL, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.CREATE_EDUCATION_LEVEL, {
				id: educationLevel._id
			}));
			next();
		}
	});
});
createEducationLevelChain.addSpec('name', true);
createEducationLevelChain.addSpec('description', true);
createEducationLevelChain.addSpec('schoolId', true);
createEducationLevelChain.addSpec('createdBy', true);
createEducationLevelChain.addSpec('updatedBy', true);

const updateEducationLevelChain = new Chain(chains.UPDATE_EDUCATION_LEVEL, (context, param, next) => {
	const updateParam = param.inputData();
	updateParam.updatedOn = new Date();
	new UpdateEducationLevel(param.educationLevelId(), updateParam, (err, educationLevel) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.UPDATE_EDUCATION_LEVEL, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.UPDATE_EDUCATION_LEVEL, educationLevel));
			next();
		}
	});
});
updateEducationLevelChain.addSpec('inputData', true);
updateEducationLevelChain.addSpec('educationLevelId', true);

const getEducationLevelChain = new Chain(chains.GET_EDUCATION_LEVEL, (context, param, next) => {
	new GetEducationLevel(param.educationLevelId(), (err, educationLevel) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.GET_EDUCATION_LEVEL, err));
			next();
		} else {
			context.set('status', 200);
			if (educationLevel) {
				context.set('dto', new GDSDomainDTO(chains.GET_EDUCATION_LEVEL, educationLevel));
			} else {
				context.set('dto', new GDSDomainDTO(chains.GET_EDUCATION_LEVEL, []));
			}

			next();
		}
	});
});
getEducationLevelChain.addSpec('educationLevelId', true);

const getEducationLevelsChain = new Chain(chains.GET_EDUCATION_LEVEL_BY_SCHOOL_ID, (context, param, next) => {
	new GetEducationLevels(param.educationLevelId(), (err, educationLevel) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.GET_EDUCATION_LEVEL_BY_SCHOOL_ID, err));
			next();
		} else {
			context.set('status', 200);
			if (educationLevel) {
				context.set('dto', new GDSDomainDTO(chains.GET_EDUCATION_LEVEL_BY_SCHOOL_ID, educationLevel));
			} else {
				context.set('dto', new GDSDomainDTO(chains.GET_EDUCATION_LEVEL_BY_SCHOOL_ID, []));
			}
			next();
		}
	});
});
getEducationLevelsChain.addSpec('educationLevelId', true);

const deleteEducationLevelChain = new Chain(chains.DELETE_EDUCATION_LEVEL, (context, param, next) => {
	new DeleteEducationLevel(param.educationLevelId(), (err) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.DELETE_EDUCATION_LEVEL, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.DELETE_EDUCATION_LEVEL, 'Education Level has been removed.'));
			next();
		}
	});
});
deleteEducationLevelChain.addSpec('educationLevelId', true);

const createDepartmentChain = new Chain(chains.CREATE_DEPARTMENT, (context, param, next) => {
	new createDepartment({
		name: param.name(),
		description: param.description(),
		schoolId: param.schoolId(),
		createdBy: param.createdBy(),
		updatedBy: param.updatedBy()
	}, (err, department) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.CREATE_DEPARTMENT, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.CREATE_DEPARTMENT, {
				id: department._id
			}));
			next();
		}
	});
});
createDepartmentChain.addSpec('name', true);
createDepartmentChain.addSpec('description', true);
createDepartmentChain.addSpec('schoolId', true);
createDepartmentChain.addSpec('createdBy', true);
createDepartmentChain.addSpec('updatedBy', true);

const updateDepartmentChain = new Chain(chains.UPDATE_DEPARTMENT, (context, param, next) => {
	const updateParam = param.inputData();
	updateParam.updatedOn = new Date();
	new UpdateDepartment(param.departmentId(), updateParam, (err, department) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.UPDATE_DEPARTMENT, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.UPDATE_DEPARTMENT, department));
			next();
		}
	});
});
updateDepartmentChain.addSpec('inputData', true);
updateDepartmentChain.addSpec('departmentId', true);

const getDepartmentChain = new Chain(chains.GET_DEPARTMENT, (context, param, next) => {
	new GetDepartment(param.departmentId(), (err, department) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.GET_DEPARTMENT, err));
			next();
		} else {
			context.set('status', 200);
			if (department) {
				context.set('dto', new GDSDomainDTO(chains.GET_DEPARTMENT, department));
			} else {
				context.set('dto', new GDSDomainDTO(chains.GET_DEPARTMENT, []));
			}

			next();
		}
	});
});
getDepartmentChain.addSpec('departmentId', true);

const getDepartmentsChain = new Chain(chains.GET_DEPARTMENT_BY_SCHOOL_ID, (context, param, next) => {
	new GetDepartments(param.departmentId(), (err, department) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.GET_DEPARTMENT_BY_SCHOOL_ID, err));
			next();
		} else {
			context.set('status', 200);
			if (department) {
				context.set('dto', new GDSDomainDTO(chains.GET_DEPARTMENT_BY_SCHOOL_ID, department));
			} else {
				context.set('dto', new GDSDomainDTO(chains.GET_DEPARTMENT_BY_SCHOOL_ID, []));
			}
			next();
		}
	});
});
getDepartmentsChain.addSpec('departmentId', true);

const deleteDepartmentChain = new Chain(chains.DELETE_DEPARTMENT, (context, param, next) => {
	new DeleteDepartment(param.departmentId(), (err) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.DELETE_DEPARTMENT, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.DELETE_DEPARTMENT, 'Department has been removed.'));
			next();
		}
	});
});
deleteDepartmentChain.addSpec('departmentId', true);

const createThemeChain = new Chain(chains.CREATE_THEME, (context, param, next) => {
	new CreateTheme({
		templateName: param.templateName(),
		description: param.description(),
		logo: param.logo(),
		schoolId: param.schoolId(),
		createdBy: param.createdBy(),
		updatedBy: param.updatedBy()
	}, (err, theme) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.CREATE_THEME, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.CREATE_THEME, {
				id: theme._id
			}));
			next();
		}
	});
});
createThemeChain.addSpec('templateName', true);
createThemeChain.addSpec('description', true);
createThemeChain.addSpec('logo', true);
createThemeChain.addSpec('schoolId', true);
createThemeChain.addSpec('createdBy', true);
createThemeChain.addSpec('updatedBy', true);

const updateThemeChain = new Chain(chains.UPDATE_THEME, (context, param, next) => {
	const updateParam = param.inputData();
	updateParam.updatedOn = new Date();
	new UpdateTheme(param.themeId(), updateParam, (err, theme) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.UPDATE_THEME, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.UPDATE_THEME, theme));
			next();
		}
	});
});
updateThemeChain.addSpec('inputData', true);
updateThemeChain.addSpec('themeId', true);

const getThemeChain = new Chain(chains.GET_THEME, (context, param, next) => {
	new getTheme(param.themeId(), (err, theme) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.GET_THEME, err));
			next();
		} else {
			context.set('status', 200);
			if (theme) {
				context.set('dto', new GDSDomainDTO(chains.GET_THEME, theme));
			} else {
				context.set('dto', new GDSDomainDTO(chains.GET_THEME, []));
			}

			next();
		}
	});
});
getThemeChain.addSpec('themeId', true);

const getThemesChain = new Chain(chains.GET_THEME_BY_SCHOOL_ID, (context, param, next) => {
	new GetThemes(param.themeId(), (err, theme) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.GET_THEME_BY_SCHOOL_ID, err));
			next();
		} else {
			context.set('status', 200);
			if (theme) {
				context.set('dto', new GDSDomainDTO(chains.GET_THEME_BY_SCHOOL_ID, theme));
			} else {
				context.set('dto', new GDSDomainDTO(chains.GET_THEME_BY_SCHOOL_ID, []));
			}
			next();
		}
	});
});
getThemesChain.addSpec('themeId', true);

const deleteThemeChain = new Chain(chains.DELETE_THEME, (context, param, next) => {
	new DeleteTheme(param.themeId(), (err) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.DELETE_THEME, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.DELETE_THEME, 'Theme has been removed.'));
			next();
		}
	});
});
deleteThemeChain.addSpec('themeId', true);

const createCodeChain = new Chain(chains.CREATE_CODE, (context, param, next) => {
	new CreateCode({
		codeType: param.codeType(),
		codeName: param.codeName(),
		codeValue: param.codeValue(),
		schoolId: param.schoolId(),
		createdBy: param.createdBy(),
		updatedBy: param.updatedBy()
	}, (err, code) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.CREATE_CODE, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.CREATE_CODE, {
				id: code._id
			}));
			next();
		}
	});
});
createCodeChain.addSpec('codeType', true);
createCodeChain.addSpec('codeName', true);
createCodeChain.addSpec('codeValue', true);
createCodeChain.addSpec('schoolId', true);
createCodeChain.addSpec('createdBy', true);
createCodeChain.addSpec('updatedBy', true);

const updateCodeChain = new Chain(chains.UPDATE_CODE, (context, param, next) => {
	const updateParam = param.inputData();
	updateParam.updatedOn = new Date();
	new UpdateCode(param.codeId(), updateParam, (err, code) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.UPDATE_CODE, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.UPDATE_CODE, code));
			next();
		}
	});
});
updateCodeChain.addSpec('inputData', true);
updateCodeChain.addSpec('codeId', true);

const getCodeChain = new Chain(chains.GET_CODE, (context, param, next) => {
	new GetCode(param, (err, code) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.GET_CODE, err));
			next();
		} else {
			context.set('status', 200);
			if (code) {
				context.set('dto', new GDSDomainDTO(chains.GET_CODE, code));
			} else {
				context.set('dto', new GDSDomainDTO(chains.GET_CODE, []));
			}

			next();
		}
	});
});

const getCodesChain = new Chain(chains.GET_CODES, (context, param, next) => {
	new GetCodes(param, (err, code) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.GET_CODES, err));
			next();
		} else {
			context.set('status', 200);
			if (code) {
				context.set('dto', new GDSDomainDTO(chains.GET_CODES, code));
			} else {
				context.set('dto', new GDSDomainDTO(chains.GET_CODES, []));
			}
			next();
		}
	});
});

const deleteCodeChain = new Chain(chains.DELETE_CODE, (context, param, next) => {
	new DeleteCode(param.codeId(), (err) => {
		if (err) {
			context.set('status', 500);
			context.set('dto', new GDSDomainDTO('ERROR_' + chains.DELETE_CODE, err));
			next();
		} else {
			context.set('status', 200);
			context.set('dto', new GDSDomainDTO(chains.DELETE_CODE, 'Code has been removed.'));
			next();
		}
	});
});
deleteCodeChain.addSpec('codeId', true);
