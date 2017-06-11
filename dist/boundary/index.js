'use strict';

Object.defineProperty(exports, "__esModule", {
            value: true
});

var _gdsConfig = require('gds-config');

var _student = require('./student/');

var _faculty = require('./faculty/');

var _schoolConfig = require('./school-config/');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var protocol = function protocol(req) {
            return req.connection.encrypted ? 'https://' : 'http://';
};

var SchoolResource = function SchoolResource(app) {
            _classCallCheck(this, SchoolResource);

            new _student.StudentsResource(app);
            new _faculty.FacultiesResource(app);
            new _schoolConfig.SchoolConfigResource(app);

            app.get('/', function (req, res) {
                        var domain = new _gdsConfig.GDSDomainDTO();
                        domain.addGet('getProfileByStudentId', protocol(req) + req.headers.host + _student.API + 'student-profile/:studentId');
                        domain.addPost('createStudent', protocol(req) + req.headers.host + _student.API + 'create');
                        domain.addPut('updateStudent', protocol(req) + req.headers.host + _student.API + 'update/:studentId');
                        domain.addDelete('deleteStudent', protocol(req) + req.headers.host + _student.API + 'delete/:studentId');
                        domain.addGet('getStudents', protocol(req) + req.headers.host + _student.API + 'get-students');
                        domain.addGet('validateStudentId', protocol(req) + req.headers.host + _student.API + 'validate-student-id/:studentId');

                        domain.addGet('getProfileByFacultyId', protocol(req) + req.headers.host + _faculty.API + 'faculty-profile/:facultyId');
                        domain.addPost('createFaculty', protocol(req) + req.headers.host + _faculty.API + 'create');
                        domain.addPut('updateFaculty', protocol(req) + req.headers.host + _faculty.API + 'update/:facultyId');
                        domain.addDelete('deleteFaculty', protocol(req) + req.headers.host + _faculty.API + 'delete/:facultyId');
                        domain.addGet('getFaculties', protocol(req) + req.headers.host + _faculty.API + 'get-faculties');
                        domain.addGet('validateFacultyId', protocol(req) + req.headers.host + _faculty.API + 'validate-faculty-id/:facultyId');

                        domain.addPost('createSchoolProfile', protocol(req) + req.headers.host + _schoolConfig.API + 'create-school-profile');
                        domain.addGet('getSchoolProfile', protocol(req) + req.headers.host + _schoolConfig.API + 'get-school-profile/:schoolId');
                        domain.addPut('updateSchoolProfile', protocol(req) + req.headers.host + _schoolConfig.API + 'update-school-profile/:schoolId');
                        domain.addDelete('deleteSchoolProfile', protocol(req) + req.headers.host + _schoolConfig.API + 'delete-school-profile/:schoolId');

                        domain.addPost('createSchoolYear', protocol(req) + req.headers.host + _schoolConfig.API + 'create-school-year');
                        domain.addGet('getSchoolYear', protocol(req) + req.headers.host + _schoolConfig.API + 'get-school-year/:schoolYearId');
                        domain.addGet('getSchoolYearBySchoolId', protocol(req) + req.headers.host + _schoolConfig.API + 'get-school-year-by-school/:schoolId');
                        domain.addPut('updateSchoolYear', protocol(req) + req.headers.host + _schoolConfig.API + 'update-school-year/:schoolYearId');
                        domain.addDelete('deleteSchoolYear', protocol(req) + req.headers.host + _schoolConfig.API + 'delete-school-year/:schoolYearId');

                        domain.addPost('createSchoolSem', protocol(req) + req.headers.host + _schoolConfig.API + 'create-school-sem');
                        domain.addGet('getSchoolSem', protocol(req) + req.headers.host + _schoolConfig.API + 'get-school-sem/:schoolSemId');
                        domain.addGet('getSchoolSemBySchoolYearId', protocol(req) + req.headers.host + _schoolConfig.API + 'get-school-sem-by-school-year/:schoolYearId');
                        domain.addPut('updateSchoolSem', protocol(req) + req.headers.host + _schoolConfig.API + 'update-school-sem/:schoolSemId');
                        domain.addDelete('deleteSchoolSem', protocol(req) + req.headers.host + _schoolConfig.API + 'delete-school-sem/:schoolSemId');

                        domain.addPost('createEducationLevel', protocol(req) + req.headers.host + _schoolConfig.API + 'create-education-level');
                        domain.addGet('getEducationLevel', protocol(req) + req.headers.host + _schoolConfig.API + 'get-education-level/:educationLevelId');
                        domain.addGet('getEducationLevelBySchoolId', protocol(req) + req.headers.host + _schoolConfig.API + 'get-education-level-by-school/:schoolId');
                        domain.addPut('updateEducationLevel', protocol(req) + req.headers.host + _schoolConfig.API + 'update-education-level/:educationLevelId');
                        domain.addDelete('deleteEducationLevel', protocol(req) + req.headers.host + _schoolConfig.API + 'delete-education-level/:educationLevelId');

                        domain.addPost('createDepartment', protocol(req) + req.headers.host + _schoolConfig.API + 'create-department');
                        domain.addGet('getDepartment', protocol(req) + req.headers.host + _schoolConfig.API + 'get-department/:departmentId');
                        domain.addGet('getDepartmentBySchoolId', protocol(req) + req.headers.host + _schoolConfig.API + 'get-department-by-school/:schoolId');
                        domain.addPut('updateDepartment', protocol(req) + req.headers.host + _schoolConfig.API + 'update-department/:departmentId');
                        domain.addDelete('deleteDepartment', protocol(req) + req.headers.host + _schoolConfig.API + 'delete-department/:departmentId');

                        domain.addPost('createTheme', protocol(req) + req.headers.host + _schoolConfig.API + 'create-theme');
                        domain.addGet('getTheme', protocol(req) + req.headers.host + _schoolConfig.API + 'get-theme/:themeId');
                        domain.addGet('getThemeBySchoolId', protocol(req) + req.headers.host + _schoolConfig.API + 'get-theme-by-school/:schoolId');
                        domain.addPut('updateTheme', protocol(req) + req.headers.host + _schoolConfig.API + 'update-theme/:themeId');
                        domain.addDelete('deleteTheme', protocol(req) + req.headers.host + _schoolConfig.API + 'delete-theme/:themeId');

                        domain.addPost('createCode', protocol(req) + req.headers.host + _schoolConfig.API + 'create-code');
                        domain.addGet('getCodes', protocol(req) + req.headers.host + _schoolConfig.API + 'get-codes/:codeType/:schoolId');
                        domain.addGet('getCode', protocol(req) + req.headers.host + _schoolConfig.API + 'get-code/:schoolId/:codeType/:codeName');
                        domain.addPut('updateCode', protocol(req) + req.headers.host + _schoolConfig.API + 'update-code/:codeId');
                        domain.addDelete('deleteCode', protocol(req) + req.headers.host + _schoolConfig.API + 'delete-code/:codeId');

                        res.status(200).send(domain);
            });
};

exports.default = SchoolResource;