import {
    GDSDomainDTO,
    GDSDomainPaginateHelper,
} from 'gds-config';
import { API as STUDENT_API, StudentsResource } from './student/';
import { API as FACULTY_API, FacultiesResource } from './faculty/';
import { API as SCHOOL_CONFIG_API, SchoolConfigResource } from './school-config/';

const protocol = (req) => {
    return req.connection.encrypted ? 'https://' : 'http://'
}

export default class SchoolResource {
    constructor(app) {
        new StudentsResource(app);
        new FacultiesResource(app);
        new SchoolConfigResource(app);

        app.get('/', (req, res) => {
            const domain = new GDSDomainDTO();
            domain.addGet('getProfileByStudentId', protocol(req) + req.headers.host + STUDENT_API + 'student-profile/:studentId');
            domain.addPost('createStudent', protocol(req) + req.headers.host + STUDENT_API + 'create');
            domain.addPut('updateStudent', protocol(req) + req.headers.host + STUDENT_API + 'update/:studentId');
            domain.addDelete('deleteStudent', protocol(req) + req.headers.host + STUDENT_API + 'delete/:studentId');
            domain.addGet('getStudents', protocol(req) + req.headers.host + STUDENT_API + 'get-students');
            domain.addGet('validateStudentId', protocol(req) + req.headers.host + STUDENT_API + 'validate-student-id/:studentId');

            domain.addGet('getProfileByFacultyId', protocol(req) + req.headers.host + FACULTY_API + 'faculty-profile/:facultyId');
            domain.addPost('createFaculty', protocol(req) + req.headers.host + FACULTY_API + 'create');
            domain.addPut('updateFaculty', protocol(req) + req.headers.host + FACULTY_API + 'update/:facultyId');
            domain.addDelete('deleteFaculty', protocol(req) + req.headers.host + FACULTY_API + 'delete/:facultyId');
            domain.addGet('getFaculties', protocol(req) + req.headers.host + FACULTY_API + 'get-faculties');
            domain.addGet('validateFacultyId', protocol(req) + req.headers.host + FACULTY_API + 'validate-faculty-id/:facultyId');

            domain.addPost('createSchoolProfile', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'create-school-profile');
            domain.addGet('getSchoolProfile', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'get-school-profile/:schoolId');
            domain.addPut('updateSchoolProfile', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'update-school-profile/:schoolId');
            domain.addDelete('deleteSchoolProfile', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'delete-school-profile/:schoolId');

            domain.addPost('createSchoolYear', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'create-school-year');
            domain.addGet('getSchoolYear', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'get-school-year/:schoolYearId');
            domain.addGet('getSchoolYearBySchoolId', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'get-school-year-by-school/:schoolId');
            domain.addPut('updateSchoolYear', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'update-school-year/:schoolYearId');
            domain.addDelete('deleteSchoolYear', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'delete-school-year/:schoolYearId');

            domain.addPost('createSchoolSem', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'create-school-sem');
            domain.addGet('getSchoolSem', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'get-school-sem/:schoolSemId');
            domain.addGet('getSchoolSemBySchoolYearId', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'get-school-sem-by-school-year/:schoolYearId');
            domain.addPut('updateSchoolSem', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'update-school-sem/:schoolSemId');
            domain.addDelete('deleteSchoolSem', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'delete-school-sem/:schoolSemId');

            domain.addPost('createEducationLevel', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'create-education-level');
            domain.addGet('getEducationLevel', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'get-education-level/:educationLevelId');
            domain.addGet('getEducationLevelBySchoolId', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'get-education-level-by-school/:schoolId');
            domain.addPut('updateEducationLevel', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'update-education-level/:educationLevelId');
            domain.addDelete('deleteEducationLevel', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'delete-education-level/:educationLevelId');

            domain.addPost('createDepartment', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'create-department');
            domain.addGet('getDepartment', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'get-department/:departmentId');
            domain.addGet('getDepartmentBySchoolId', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'get-department-by-school/:schoolId');
            domain.addPut('updateDepartment', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'update-department/:departmentId');
            domain.addDelete('deleteDepartment', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'delete-department/:departmentId');

            domain.addPost('createTheme', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'create-theme');
            domain.addGet('getTheme', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'get-theme/:themeId');
            domain.addGet('getThemeBySchoolId', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'get-theme-by-school/:schoolId');
            domain.addPut('updateTheme', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'update-theme/:themeId');
            domain.addDelete('deleteTheme', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'delete-theme/:themeId');

            domain.addPost('createCode', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'create-code');
            domain.addGet('getCodes', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'get-codes/:codeType/:schoolId');
            domain.addGet('getCode', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'get-code/:schoolId/:codeType/:codeName');
            domain.addPut('updateCode', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'update-code/:codeId');
            domain.addDelete('deleteCode', protocol(req) + req.headers.host + SCHOOL_CONFIG_API + 'delete-code/:codeId');

            res.status(200).send(domain);
        });
    }
}