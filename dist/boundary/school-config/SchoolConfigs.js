'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CreateSchoolProfile = require('../../control/school-config/CreateSchoolProfile');

var _CreateSchoolProfile2 = _interopRequireDefault(_CreateSchoolProfile);

var _UpdateSchoolProfile = require('../../control/school-config/UpdateSchoolProfile');

var _UpdateSchoolProfile2 = _interopRequireDefault(_UpdateSchoolProfile);

var _GetSchoolProfileBySchoolId = require('../../control/school-config/GetSchoolProfileBySchoolId');

var _GetSchoolProfileBySchoolId2 = _interopRequireDefault(_GetSchoolProfileBySchoolId);

var _DeleteSchoolProfile = require('../../control/school-config/DeleteSchoolProfile');

var _DeleteSchoolProfile2 = _interopRequireDefault(_DeleteSchoolProfile);

var _CreateSchoolYear = require('../../control/school-config/CreateSchoolYear');

var _CreateSchoolYear2 = _interopRequireDefault(_CreateSchoolYear);

var _UpdateSchoolYear = require('../../control/school-config/UpdateSchoolYear');

var _UpdateSchoolYear2 = _interopRequireDefault(_UpdateSchoolYear);

var _GetSchoolYearBySchoolYearId = require('../../control/school-config/GetSchoolYearBySchoolYearId');

var _GetSchoolYearBySchoolYearId2 = _interopRequireDefault(_GetSchoolYearBySchoolYearId);

var _GetSchoolYears = require('../../control/school-config/GetSchoolYears');

var _GetSchoolYears2 = _interopRequireDefault(_GetSchoolYears);

var _DeleteSchoolYear = require('../../control/school-config/DeleteSchoolYear');

var _DeleteSchoolYear2 = _interopRequireDefault(_DeleteSchoolYear);

var _CreateSchoolSem = require('../../control/school-config/CreateSchoolSem');

var _CreateSchoolSem2 = _interopRequireDefault(_CreateSchoolSem);

var _UpdateSchoolSem = require('../../control/school-config/UpdateSchoolSem');

var _UpdateSchoolSem2 = _interopRequireDefault(_UpdateSchoolSem);

var _GetSchoolSemBySchoolSemId = require('../../control/school-config/GetSchoolSemBySchoolSemId');

var _GetSchoolSemBySchoolSemId2 = _interopRequireDefault(_GetSchoolSemBySchoolSemId);

var _GetSchoolSems = require('../../control/school-config/GetSchoolSems');

var _GetSchoolSems2 = _interopRequireDefault(_GetSchoolSems);

var _DeleteSchoolSem = require('../../control/school-config/DeleteSchoolSem');

var _DeleteSchoolSem2 = _interopRequireDefault(_DeleteSchoolSem);

var _CreateEducationLevel = require('../../control/school-config/CreateEducationLevel');

var _CreateEducationLevel2 = _interopRequireDefault(_CreateEducationLevel);

var _UpdateEducationLevel = require('../../control/school-config/UpdateEducationLevel');

var _UpdateEducationLevel2 = _interopRequireDefault(_UpdateEducationLevel);

var _GetEducationLevelByEducationLevelId = require('../../control/school-config/GetEducationLevelByEducationLevelId');

var _GetEducationLevelByEducationLevelId2 = _interopRequireDefault(_GetEducationLevelByEducationLevelId);

var _GetEducationLevels = require('../../control/school-config/GetEducationLevels');

var _GetEducationLevels2 = _interopRequireDefault(_GetEducationLevels);

var _DeleteEducationLevel = require('../../control/school-config/DeleteEducationLevel');

var _DeleteEducationLevel2 = _interopRequireDefault(_DeleteEducationLevel);

var _CreateDepartment = require('../../control/school-config/CreateDepartment');

var _CreateDepartment2 = _interopRequireDefault(_CreateDepartment);

var _UpdateDepartment = require('../../control/school-config/UpdateDepartment');

var _UpdateDepartment2 = _interopRequireDefault(_UpdateDepartment);

var _GetDepartmentByDepartmentId = require('../../control/school-config/GetDepartmentByDepartmentId');

var _GetDepartmentByDepartmentId2 = _interopRequireDefault(_GetDepartmentByDepartmentId);

var _GetDepartments = require('../../control/school-config/GetDepartments');

var _GetDepartments2 = _interopRequireDefault(_GetDepartments);

var _DeleteDepartment = require('../../control/school-config/DeleteDepartment');

var _DeleteDepartment2 = _interopRequireDefault(_DeleteDepartment);

var _CreateTheme = require('../../control/school-config/CreateTheme');

var _CreateTheme2 = _interopRequireDefault(_CreateTheme);

var _UpdateTheme = require('../../control/school-config/UpdateTheme');

var _UpdateTheme2 = _interopRequireDefault(_UpdateTheme);

var _GetThemeByThemeId = require('../../control/school-config/GetThemeByThemeId');

var _GetThemeByThemeId2 = _interopRequireDefault(_GetThemeByThemeId);

var _GetThemes = require('../../control/school-config/GetThemes');

var _GetThemes2 = _interopRequireDefault(_GetThemes);

var _DeleteTheme = require('../../control/school-config/DeleteTheme');

var _DeleteTheme2 = _interopRequireDefault(_DeleteTheme);

var _CreateCode = require('../../control/school-config/CreateCode');

var _CreateCode2 = _interopRequireDefault(_CreateCode);

var _UpdateCode = require('../../control/school-config/UpdateCode');

var _UpdateCode2 = _interopRequireDefault(_UpdateCode);

var _GetCodes = require('../../control/school-config/GetCodes');

var _GetCodes2 = _interopRequireDefault(_GetCodes);

var _GetCode = require('../../control/school-config/GetCode');

var _GetCode2 = _interopRequireDefault(_GetCode);

var _DeleteCode = require('../../control/school-config/DeleteCode');

var _DeleteCode2 = _interopRequireDefault(_DeleteCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SchoolConfigs = function () {
    function SchoolConfigs() {
        _classCallCheck(this, SchoolConfigs);
    }

    _createClass(SchoolConfigs, [{
        key: 'createSchoolProfile',
        value: function createSchoolProfile(param, callback) {
            new _CreateSchoolProfile2.default({
                name: param.name,
                address: param.address,
                createdBy: param.createdBy,
                updatedBy: param.createdBy }, callback);
        }
    }, {
        key: 'updateSchoolProfile',
        value: function updateSchoolProfile(schoolId, updateParam, callback) {
            updateParam.updatedOn = new Date();
            new _UpdateSchoolProfile2.default(schoolId, updateParam, callback);
        }
    }, {
        key: 'getSchoolProfile',
        value: function getSchoolProfile(schoolId, callback) {
            new _GetSchoolProfileBySchoolId2.default(schoolId, function (err, result) {
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
    }, {
        key: 'deleteSchoolProfile',
        value: function deleteSchoolProfile(schoolId, callback) {
            new _DeleteSchoolProfile2.default(schoolId, callback);
        }
    }, {
        key: 'createSchoolYear',
        value: function createSchoolYear(param, callback) {
            new _CreateSchoolYear2.default({
                description: param.description,
                dateStart: param.dateStart,
                dateEnd: param.dateEnd,
                schoolId: param.schoolId,
                createdBy: param.createdBy,
                updatedBy: param.createdBy }, callback);
        }
    }, {
        key: 'updateSchoolYear',
        value: function updateSchoolYear(schoolYearId, updateParam, callback) {
            updateParam.updatedOn = new Date();
            new UpdateSchoolYear(schoolYearId, updateParam, callback);
        }
    }, {
        key: 'getSchoolYear',
        value: function getSchoolYear(schoolYearId, callback) {
            new _GetSchoolYearBySchoolYearId2.default(schoolYearId, function (err, result) {
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
    }, {
        key: 'getSchoolYears',
        value: function getSchoolYears(params, callback) {
            new _GetSchoolYears2.default(params, function (err, result) {
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
    }, {
        key: 'deleteSchoolYear',
        value: function deleteSchoolYear(schoolYearId, callback) {
            new _DeleteSchoolYear2.default(schoolYearId, callback);
        }
    }, {
        key: 'createSchoolSem',
        value: function createSchoolSem(param, callback) {
            new _CreateSchoolSem2.default({
                description: param.description,
                dateStart: param.dateStart,
                dateEnd: param.dateEnd,
                schoolYearId: param.schoolYearId,
                createdBy: param.createdBy,
                updatedBy: param.createdBy }, callback);
        }
    }, {
        key: 'updateSchoolSem',
        value: function updateSchoolSem(schoolSemId, updateParam, callback) {
            updateParam.updatedOn = new Date();
            new UpdateSchoolSem(schoolSemId, updateParam, callback);
        }
    }, {
        key: 'getSchoolSem',
        value: function getSchoolSem(schoolSemId, callback) {
            new _GetSchoolSemBySchoolSemId2.default(schoolSemId, function (err, result) {
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
    }, {
        key: 'getSchoolSems',
        value: function getSchoolSems(params, callback) {
            new _GetSchoolSems2.default(params, function (err, result) {
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
    }, {
        key: 'deleteSchoolSem',
        value: function deleteSchoolSem(schoolSemId, callback) {
            new _DeleteSchoolSem2.default(schoolSemId, callback);
        }
    }, {
        key: 'createEducationLevel',
        value: function createEducationLevel(param, callback) {
            new _CreateEducationLevel2.default({
                name: param.name,
                description: param.description,
                schoolId: param.schoolId,
                createdBy: param.createdBy,
                updatedBy: param.createdBy }, callback);
        }
    }, {
        key: 'updateEducationLevel',
        value: function updateEducationLevel(educationLevelId, updateParam, callback) {
            updateParam.updatedOn = new Date();
            new UpdateEducationLevel(educationLevelId, updateParam, callback);
        }
    }, {
        key: 'getEducationLevel',
        value: function getEducationLevel(educationLevelId, callback) {
            new _GetEducationLevelByEducationLevelId2.default(educationLevelId, function (err, result) {
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
    }, {
        key: 'getEducationLevels',
        value: function getEducationLevels(params, callback) {
            new _GetEducationLevels2.default(params, function (err, result) {
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
    }, {
        key: 'deleteEducationLevel',
        value: function deleteEducationLevel(educationLevelId, callback) {
            new _DeleteEducationLevel2.default(educationLevelId, callback);
        }
    }, {
        key: 'createDepartment',
        value: function createDepartment(param, callback) {
            new _CreateDepartment2.default({
                name: param.name,
                description: param.description,
                schoolId: param.schoolId,
                createdBy: param.createdBy,
                updatedBy: param.createdBy }, callback);
        }
    }, {
        key: 'updateDepartment',
        value: function updateDepartment(departmentId, updateParam, callback) {
            updateParam.updatedOn = new Date();
            new UpdateDepartment(departmentId, updateParam, callback);
        }
    }, {
        key: 'getDepartment',
        value: function getDepartment(departmentId, callback) {
            new _GetDepartmentByDepartmentId2.default(departmentId, function (err, result) {
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
    }, {
        key: 'getDepartments',
        value: function getDepartments(params, callback) {
            new _GetDepartments2.default(params, function (err, result) {
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
    }, {
        key: 'deleteDepartment',
        value: function deleteDepartment(departmentId, callback) {
            new _DeleteDepartment2.default(departmentId, callback);
        }
    }, {
        key: 'createTheme',
        value: function createTheme(param, callback) {
            new _CreateTheme2.default({
                templateName: param.templateName,
                description: param.description,
                logo: param.logo,
                schoolId: param.schoolId,
                createdBy: param.createdBy,
                updatedBy: param.createdBy }, callback);
        }
    }, {
        key: 'updateTheme',
        value: function updateTheme(themeId, updateParam, callback) {
            updateParam.updatedOn = new Date();
            new UpdateTheme(themeId, updateParam, callback);
        }
    }, {
        key: 'getTheme',
        value: function getTheme(themeId, callback) {
            new _GetThemeByThemeId2.default(themeId, function (err, result) {
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
    }, {
        key: 'getThemes',
        value: function getThemes(params, callback) {
            new _GetThemes2.default(params, function (err, result) {
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
    }, {
        key: 'deleteTheme',
        value: function deleteTheme(themeId, callback) {
            new _DeleteTheme2.default(themeId, callback);
        }
    }, {
        key: 'createCode',
        value: function createCode(param, callback) {
            new _CreateCode2.default({
                codeType: param.codeType,
                codeName: param.codeName,
                codeValue: param.codeValue,
                schoolId: param.schoolId,
                createdBy: param.createdBy,
                updatedBy: param.createdBy }, callback);
        }
    }, {
        key: 'updateCode',
        value: function updateCode(codeId, updateParam, callback) {
            updateParam.updatedOn = new Date();
            new UpdateCode(codeId, updateParam, callback);
        }
    }, {
        key: 'getCodes',
        value: function getCodes(params, callback) {
            new _GetCodes2.default(params, function (err, result) {
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
    }, {
        key: 'getCode',
        value: function getCode(params, callback) {
            new _GetCode2.default(params, function (err, result) {
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
    }, {
        key: 'deleteCode',
        value: function deleteCode(codeId, callback) {
            new _DeleteCode2.default(codeId, callback);
        }
    }]);

    return SchoolConfigs;
}();

exports.default = SchoolConfigs;