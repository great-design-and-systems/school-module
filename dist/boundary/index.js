'use strict';

Object.defineProperty(exports, "__esModule", {
            value: true
});
exports.SchoolResourceChain = exports.SchoolResource = undefined;

var _faculty = require('./faculty/');

var _gdsConfig = require('gds-config');

var _schoolConfig = require('./school-config/');

var _student = require('./student/');

var _fluidChains = require('fluid-chains');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var protocol = function protocol(req) {
            return req.connection.encrypted ? 'https://' : 'http://';
};

var SchoolResource = exports.SchoolResource = function SchoolResource(app) {
            _classCallCheck(this, SchoolResource);

            new _student.StudentsResource(app);
            new _faculty.FacultiesResource(app);
            new _schoolConfig.SchoolConfigResource(app);

            app.get('/gds', function (req, res) {
                        var domain = new _gdsConfig.GDSDomainDTO();
                        domain.addGet('getProfileByStudentId', protocol + host + _student.API + 'student-profile/:studentId');
                        domain.addPost('createStudent', protocol + host + _student.API + 'create');
                        domain.addPut('updateStudent', protocol + host + _student.API + 'update/:studentId');
                        domain.addDelete('deleteStudent', protocol + host + _student.API + 'delete/:studentId');
                        domain.addGet('getStudents', protocol + host + _student.API + 'get-students');
                        domain.addGet('validateStudentId', protocol + host + _student.API + 'validate-student-id/:studentId');

                        domain.addGet('getProfileByFacultyId', protocol + host + _faculty.API + 'faculty-profile/:facultyId');
                        domain.addPost('createFaculty', protocol + host + _faculty.API + 'create');
                        domain.addPut('updateFaculty', protocol + host + _faculty.API + 'update/:facultyId');
                        domain.addDelete('deleteFaculty', protocol + host + _faculty.API + 'delete/:facultyId');
                        domain.addGet('getFaculties', protocol + host + _faculty.API + 'get-faculties');
                        domain.addGet('validateFacultyId', protocol + host + _faculty.API + 'validate-faculty-id/:facultyId');

                        domain.addPost('createSchoolProfile', protocol + host + _schoolConfig.API + 'create-school-profile');
                        domain.addGet('getSchoolProfile', protocol + host + _schoolConfig.API + 'get-school-profile/:schoolId');
                        domain.addPut('updateSchoolProfile', protocol + host + _schoolConfig.API + 'update-school-profile/:schoolId');
                        domain.addDelete('deleteSchoolProfile', protocol + host + _schoolConfig.API + 'delete-school-profile/:schoolId');

                        domain.addPost('createSchoolYear', protocol + host + _schoolConfig.API + 'create-school-year');
                        domain.addGet('getSchoolYear', protocol + host + _schoolConfig.API + 'get-school-year/:schoolYearId');
                        domain.addGet('getSchoolYearBySchoolId', protocol + host + _schoolConfig.API + 'get-school-year-by-school/:schoolId');
                        domain.addPut('updateSchoolYear', protocol + host + _schoolConfig.API + 'update-school-year/:schoolYearId');
                        domain.addDelete('deleteSchoolYear', protocol + host + _schoolConfig.API + 'delete-school-year/:schoolYearId');

                        domain.addPost('createSchoolSem', protocol + host + _schoolConfig.API + 'create-school-sem');
                        domain.addGet('getSchoolSem', protocol + host + _schoolConfig.API + 'get-school-sem/:schoolSemId');
                        domain.addGet('getSchoolSemBySchoolYearId', protocol + host + _schoolConfig.API + 'get-school-sem-by-school-year/:schoolYearId');
                        domain.addPut('updateSchoolSem', protocol + host + _schoolConfig.API + 'update-school-sem/:schoolSemId');
                        domain.addDelete('deleteSchoolSem', protocol + host + _schoolConfig.API + 'delete-school-sem/:schoolSemId');

                        domain.addPost('createEducationLevel', protocol + host + _schoolConfig.API + 'create-education-level');
                        domain.addGet('getEducationLevel', protocol + host + _schoolConfig.API + 'get-education-level/:educationLevelId');
                        domain.addGet('getEducationLevelBySchoolId', protocol + host + _schoolConfig.API + 'get-education-level-by-school/:schoolId');
                        domain.addPut('updateEducationLevel', protocol + host + _schoolConfig.API + 'update-education-level/:educationLevelId');
                        domain.addDelete('deleteEducationLevel', protocol + host + _schoolConfig.API + 'delete-education-level/:educationLevelId');

                        domain.addPost('createDepartment', protocol + host + _schoolConfig.API + 'create-department');
                        domain.addGet('getDepartment', protocol + host + _schoolConfig.API + 'get-department/:departmentId');
                        domain.addGet('getDepartmentBySchoolId', protocol + host + _schoolConfig.API + 'get-department-by-school/:schoolId');
                        domain.addPut('updateDepartment', protocol + host + _schoolConfig.API + 'update-department/:departmentId');
                        domain.addDelete('deleteDepartment', protocol + host + _schoolConfig.API + 'delete-department/:departmentId');

                        domain.addPost('createTheme', protocol + host + _schoolConfig.API + 'create-theme');
                        domain.addGet('getTheme', protocol + host + _schoolConfig.API + 'get-theme/:themeId');
                        domain.addGet('getThemeBySchoolId', protocol + host + _schoolConfig.API + 'get-theme-by-school/:schoolId');
                        domain.addPut('updateTheme', protocol + host + _schoolConfig.API + 'update-theme/:themeId');
                        domain.addDelete('deleteTheme', protocol + host + _schoolConfig.API + 'delete-theme/:themeId');

                        domain.addPost('createCode', protocol + host + _schoolConfig.API + 'create-code');
                        domain.addGet('getCodes', protocol + host + _schoolConfig.API + 'get-codes/:codeType/:schoolId');
                        domain.addGet('getCode', protocol + host + _schoolConfig.API + 'get-code/:schoolId/:codeType/:codeName');
                        domain.addPut('updateCode', protocol + host + _schoolConfig.API + 'update-code/:codeId');
                        domain.addDelete('deleteCode', protocol + host + _schoolConfig.API + 'delete-code/:codeId');

                        res.status(200).send(domain);
            });
};

var SchoolResourceChain = exports.SchoolResourceChain = function (_Chain) {
            _inherits(SchoolResourceChain, _Chain);

            function SchoolResourceChain() {
                        _classCallCheck(this, SchoolResourceChain);

                        var _this = _possibleConstructorReturn(this, (SchoolResourceChain.__proto__ || Object.getPrototypeOf(SchoolResourceChain)).call(this, 'SchoolResourceChain', function (context, param, next) {
                                    var domain = param.domain();
                                    var host = param.host();
                                    var protocol = param.protocol();

                                    domain.addGet('getProfileByStudentId', protocol + host + _student.API + 'student-profile/:studentId');
                                    domain.addPost('createStudent', protocol + host + _student.API + 'create');
                                    domain.addPut('updateStudent', protocol + host + _student.API + 'update/:studentId');
                                    domain.addDelete('deleteStudent', protocol + host + _student.API + 'delete/:studentId');
                                    domain.addGet('getStudents', protocol + host + _student.API + 'get-students');
                                    domain.addGet('validateStudentId', protocol + host + _student.API + 'validate-student-id/:studentId');

                                    domain.addGet('getProfileByFacultyId', protocol + host + _faculty.API + 'faculty-profile/:facultyId');
                                    domain.addPost('createFaculty', protocol + host + _faculty.API + 'create');
                                    domain.addPut('updateFaculty', protocol + host + _faculty.API + 'update/:facultyId');
                                    domain.addDelete('deleteFaculty', protocol + host + _faculty.API + 'delete/:facultyId');
                                    domain.addGet('getFaculties', protocol + host + _faculty.API + 'get-faculties');
                                    domain.addGet('validateFacultyId', protocol + host + _faculty.API + 'validate-faculty-id/:facultyId');

                                    domain.addPost('createSchoolProfile', protocol + host + _schoolConfig.API + 'create-school-profile');
                                    domain.addGet('getSchoolProfile', protocol + host + _schoolConfig.API + 'get-school-profile/:schoolId');
                                    domain.addPut('updateSchoolProfile', protocol + host + _schoolConfig.API + 'update-school-profile/:schoolId');
                                    domain.addDelete('deleteSchoolProfile', protocol + host + _schoolConfig.API + 'delete-school-profile/:schoolId');

                                    domain.addPost('createSchoolYear', protocol + host + _schoolConfig.API + 'create-school-year');
                                    domain.addGet('getSchoolYear', protocol + host + _schoolConfig.API + 'get-school-year/:schoolYearId');
                                    domain.addGet('getSchoolYearBySchoolId', protocol + host + _schoolConfig.API + 'get-school-year-by-school/:schoolId');
                                    domain.addPut('updateSchoolYear', protocol + host + _schoolConfig.API + 'update-school-year/:schoolYearId');
                                    domain.addDelete('deleteSchoolYear', protocol + host + _schoolConfig.API + 'delete-school-year/:schoolYearId');

                                    domain.addPost('createSchoolSem', protocol + host + _schoolConfig.API + 'create-school-sem');
                                    domain.addGet('getSchoolSem', protocol + host + _schoolConfig.API + 'get-school-sem/:schoolSemId');
                                    domain.addGet('getSchoolSemBySchoolYearId', protocol + host + _schoolConfig.API + 'get-school-sem-by-school-year/:schoolYearId');
                                    domain.addPut('updateSchoolSem', protocol + host + _schoolConfig.API + 'update-school-sem/:schoolSemId');
                                    domain.addDelete('deleteSchoolSem', protocol + host + _schoolConfig.API + 'delete-school-sem/:schoolSemId');

                                    domain.addPost('createEducationLevel', protocol + host + _schoolConfig.API + 'create-education-level');
                                    domain.addGet('getEducationLevel', protocol + host + _schoolConfig.API + 'get-education-level/:educationLevelId');
                                    domain.addGet('getEducationLevelBySchoolId', protocol + host + _schoolConfig.API + 'get-education-level-by-school/:schoolId');
                                    domain.addPut('updateEducationLevel', protocol + host + _schoolConfig.API + 'update-education-level/:educationLevelId');
                                    domain.addDelete('deleteEducationLevel', protocol + host + _schoolConfig.API + 'delete-education-level/:educationLevelId');

                                    domain.addPost('createDepartment', protocol + host + _schoolConfig.API + 'create-department');
                                    domain.addGet('getDepartment', protocol + host + _schoolConfig.API + 'get-department/:departmentId');
                                    domain.addGet('getDepartmentBySchoolId', protocol + host + _schoolConfig.API + 'get-department-by-school/:schoolId');
                                    domain.addPut('updateDepartment', protocol + host + _schoolConfig.API + 'update-department/:departmentId');
                                    domain.addDelete('deleteDepartment', protocol + host + _schoolConfig.API + 'delete-department/:departmentId');

                                    domain.addPost('createTheme', protocol + host + _schoolConfig.API + 'create-theme');
                                    domain.addGet('getTheme', protocol + host + _schoolConfig.API + 'get-theme/:themeId');
                                    domain.addGet('getThemeBySchoolId', protocol + host + _schoolConfig.API + 'get-theme-by-school/:schoolId');
                                    domain.addPut('updateTheme', protocol + host + _schoolConfig.API + 'update-theme/:themeId');
                                    domain.addDelete('deleteTheme', protocol + host + _schoolConfig.API + 'delete-theme/:themeId');

                                    domain.addPost('createCode', protocol + host + _schoolConfig.API + 'create-code');
                                    domain.addGet('getCodes', protocol + host + _schoolConfig.API + 'get-codes/:codeType/:schoolId');
                                    domain.addGet('getCode', protocol + host + _schoolConfig.API + 'get-code/:schoolId/:codeType/:codeName');
                                    domain.addPut('updateCode', protocol + host + _schoolConfig.API + 'update-code/:codeId');
                                    domain.addDelete('deleteCode', protocol + host + _schoolConfig.API + 'delete-code/:codeId');

                                    context.set('domain', domain);
                                    context.set('host', host);
                                    context.set('protocol', protocol);
                                    next();
                        }));

                        _this.addSpec('host', true);
                        _this.addSpec('domain', true);
                        _this.addSpec('protocol', true);
                        return _this;
            }

            return SchoolResourceChain;
}(_fluidChains.Chain);