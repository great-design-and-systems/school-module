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
                        var dto = new _gdsConfig.GDSDomainDTO();
                        dto.addGet('getProfileByStudentId', protocol + host + _student.API + 'student-profile/:studentId');
                        dto.addPost('createStudent', protocol + host + _student.API + 'create');
                        dto.addPut('updateStudent', protocol + host + _student.API + 'update/:studentId');
                        dto.addDelete('deleteStudent', protocol + host + _student.API + 'delete/:studentId');
                        dto.addGet('getStudents', protocol + host + _student.API + 'get-students');
                        dto.addGet('validateStudentId', protocol + host + _student.API + 'validate-student-id/:studentId');

                        dto.addGet('getProfileByFacultyId', protocol + host + _faculty.API + 'faculty-profile/:facultyId');
                        dto.addPost('createFaculty', protocol + host + _faculty.API + 'create');
                        dto.addPut('updateFaculty', protocol + host + _faculty.API + 'update/:facultyId');
                        dto.addDelete('deleteFaculty', protocol + host + _faculty.API + 'delete/:facultyId');
                        dto.addGet('getFaculties', protocol + host + _faculty.API + 'get-faculties');
                        dto.addGet('validateFacultyId', protocol + host + _faculty.API + 'validate-faculty-id/:facultyId');

                        dto.addPost('createSchoolProfile', protocol + host + _schoolConfig.API + 'create-school-profile');
                        dto.addGet('getSchoolProfile', protocol + host + _schoolConfig.API + 'get-school-profile/:schoolId');
                        dto.addPut('updateSchoolProfile', protocol + host + _schoolConfig.API + 'update-school-profile/:schoolId');
                        dto.addDelete('deleteSchoolProfile', protocol + host + _schoolConfig.API + 'delete-school-profile/:schoolId');

                        dto.addPost('createSchoolYear', protocol + host + _schoolConfig.API + 'create-school-year');
                        dto.addGet('getSchoolYear', protocol + host + _schoolConfig.API + 'get-school-year/:schoolYearId');
                        dto.addGet('getSchoolYearBySchoolId', protocol + host + _schoolConfig.API + 'get-school-year-by-school/:schoolId');
                        dto.addPut('updateSchoolYear', protocol + host + _schoolConfig.API + 'update-school-year/:schoolYearId');
                        dto.addDelete('deleteSchoolYear', protocol + host + _schoolConfig.API + 'delete-school-year/:schoolYearId');

                        dto.addPost('createSchoolSem', protocol + host + _schoolConfig.API + 'create-school-sem');
                        dto.addGet('getSchoolSem', protocol + host + _schoolConfig.API + 'get-school-sem/:schoolSemId');
                        dto.addGet('getSchoolSemBySchoolYearId', protocol + host + _schoolConfig.API + 'get-school-sem-by-school-year/:schoolYearId');
                        dto.addPut('updateSchoolSem', protocol + host + _schoolConfig.API + 'update-school-sem/:schoolSemId');
                        dto.addDelete('deleteSchoolSem', protocol + host + _schoolConfig.API + 'delete-school-sem/:schoolSemId');

                        dto.addPost('createEducationLevel', protocol + host + _schoolConfig.API + 'create-education-level');
                        dto.addGet('getEducationLevel', protocol + host + _schoolConfig.API + 'get-education-level/:educationLevelId');
                        dto.addGet('getEducationLevelBySchoolId', protocol + host + _schoolConfig.API + 'get-education-level-by-school/:schoolId');
                        dto.addPut('updateEducationLevel', protocol + host + _schoolConfig.API + 'update-education-level/:educationLevelId');
                        dto.addDelete('deleteEducationLevel', protocol + host + _schoolConfig.API + 'delete-education-level/:educationLevelId');

                        dto.addPost('createDepartment', protocol + host + _schoolConfig.API + 'create-department');
                        dto.addGet('getDepartment', protocol + host + _schoolConfig.API + 'get-department/:departmentId');
                        dto.addGet('getDepartmentBySchoolId', protocol + host + _schoolConfig.API + 'get-department-by-school/:schoolId');
                        dto.addPut('updateDepartment', protocol + host + _schoolConfig.API + 'update-department/:departmentId');
                        dto.addDelete('deleteDepartment', protocol + host + _schoolConfig.API + 'delete-department/:departmentId');

                        dto.addPost('createTheme', protocol + host + _schoolConfig.API + 'create-theme');
                        dto.addGet('getTheme', protocol + host + _schoolConfig.API + 'get-theme/:themeId');
                        dto.addGet('getThemeBySchoolId', protocol + host + _schoolConfig.API + 'get-theme-by-school/:schoolId');
                        dto.addPut('updateTheme', protocol + host + _schoolConfig.API + 'update-theme/:themeId');
                        dto.addDelete('deleteTheme', protocol + host + _schoolConfig.API + 'delete-theme/:themeId');

                        dto.addPost('createCode', protocol + host + _schoolConfig.API + 'create-code');
                        dto.addGet('getCodes', protocol + host + _schoolConfig.API + 'get-codes/:codeType/:schoolId');
                        dto.addGet('getCode', protocol + host + _schoolConfig.API + 'get-code/:schoolId/:codeType/:codeName');
                        dto.addPut('updateCode', protocol + host + _schoolConfig.API + 'update-code/:codeId');
                        dto.addDelete('deleteCode', protocol + host + _schoolConfig.API + 'delete-code/:codeId');

                        res.status(200).send(dto);
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
                                    var dto = new _gdsConfig.GDSDomainDTO();
                                    dto.setDomainName('School');
                                    dto.addGet('getProfileByStudentId', protocol + host + _student.API + 'student-profile/:studentId');
                                    dto.addPost('createStudent', protocol + host + _student.API + 'create');
                                    dto.addPut('updateStudent', protocol + host + _student.API + 'update/:studentId');
                                    dto.addDelete('deleteStudent', protocol + host + _student.API + 'delete/:studentId');
                                    dto.addGet('getStudents', protocol + host + _student.API + 'get-students');
                                    dto.addGet('validateStudentId', protocol + host + _student.API + 'validate-student-id/:studentId');

                                    dto.addGet('getProfileByFacultyId', protocol + host + _faculty.API + 'faculty-profile/:facultyId');
                                    dto.addPost('createFaculty', protocol + host + _faculty.API + 'create');
                                    dto.addPut('updateFaculty', protocol + host + _faculty.API + 'update/:facultyId');
                                    dto.addDelete('deleteFaculty', protocol + host + _faculty.API + 'delete/:facultyId');
                                    dto.addGet('getFaculties', protocol + host + _faculty.API + 'get-faculties');
                                    dto.addGet('validateFacultyId', protocol + host + _faculty.API + 'validate-faculty-id/:facultyId');

                                    dto.addPost('createSchoolProfile', protocol + host + _schoolConfig.API + 'create-school-profile');
                                    dto.addGet('getSchoolProfile', protocol + host + _schoolConfig.API + 'get-school-profile/:schoolId');
                                    dto.addPut('updateSchoolProfile', protocol + host + _schoolConfig.API + 'update-school-profile/:schoolId');
                                    dto.addDelete('deleteSchoolProfile', protocol + host + _schoolConfig.API + 'delete-school-profile/:schoolId');

                                    dto.addPost('createSchoolYear', protocol + host + _schoolConfig.API + 'create-school-year');
                                    dto.addGet('getSchoolYear', protocol + host + _schoolConfig.API + 'get-school-year/:schoolYearId');
                                    dto.addGet('getSchoolYearBySchoolId', protocol + host + _schoolConfig.API + 'get-school-year-by-school/:schoolId');
                                    dto.addPut('updateSchoolYear', protocol + host + _schoolConfig.API + 'update-school-year/:schoolYearId');
                                    dto.addDelete('deleteSchoolYear', protocol + host + _schoolConfig.API + 'delete-school-year/:schoolYearId');

                                    dto.addPost('createSchoolSem', protocol + host + _schoolConfig.API + 'create-school-sem');
                                    dto.addGet('getSchoolSem', protocol + host + _schoolConfig.API + 'get-school-sem/:schoolSemId');
                                    dto.addGet('getSchoolSemBySchoolYearId', protocol + host + _schoolConfig.API + 'get-school-sem-by-school-year/:schoolYearId');
                                    dto.addPut('updateSchoolSem', protocol + host + _schoolConfig.API + 'update-school-sem/:schoolSemId');
                                    dto.addDelete('deleteSchoolSem', protocol + host + _schoolConfig.API + 'delete-school-sem/:schoolSemId');

                                    dto.addPost('createEducationLevel', protocol + host + _schoolConfig.API + 'create-education-level');
                                    dto.addGet('getEducationLevel', protocol + host + _schoolConfig.API + 'get-education-level/:educationLevelId');
                                    dto.addGet('getEducationLevelBySchoolId', protocol + host + _schoolConfig.API + 'get-education-level-by-school/:schoolId');
                                    dto.addPut('updateEducationLevel', protocol + host + _schoolConfig.API + 'update-education-level/:educationLevelId');
                                    dto.addDelete('deleteEducationLevel', protocol + host + _schoolConfig.API + 'delete-education-level/:educationLevelId');

                                    dto.addPost('createDepartment', protocol + host + _schoolConfig.API + 'create-department');
                                    dto.addGet('getDepartment', protocol + host + _schoolConfig.API + 'get-department/:departmentId');
                                    dto.addGet('getDepartmentBySchoolId', protocol + host + _schoolConfig.API + 'get-department-by-school/:schoolId');
                                    dto.addPut('updateDepartment', protocol + host + _schoolConfig.API + 'update-department/:departmentId');
                                    dto.addDelete('deleteDepartment', protocol + host + _schoolConfig.API + 'delete-department/:departmentId');

                                    dto.addPost('createTheme', protocol + host + _schoolConfig.API + 'create-theme');
                                    dto.addGet('getTheme', protocol + host + _schoolConfig.API + 'get-theme/:themeId');
                                    dto.addGet('getThemeBySchoolId', protocol + host + _schoolConfig.API + 'get-theme-by-school/:schoolId');
                                    dto.addPut('updateTheme', protocol + host + _schoolConfig.API + 'update-theme/:themeId');
                                    dto.addDelete('deleteTheme', protocol + host + _schoolConfig.API + 'delete-theme/:themeId');

                                    dto.addPost('createCode', protocol + host + _schoolConfig.API + 'create-code');
                                    dto.addGet('getCodes', protocol + host + _schoolConfig.API + 'get-codes/:codeType/:schoolId');
                                    dto.addGet('getCode', protocol + host + _schoolConfig.API + 'get-code/:schoolId/:codeType/:codeName');
                                    dto.addPut('updateCode', protocol + host + _schoolConfig.API + 'update-code/:codeId');
                                    dto.addDelete('deleteCode', protocol + host + _schoolConfig.API + 'delete-code/:codeId');
                                    domain.push(dto);
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