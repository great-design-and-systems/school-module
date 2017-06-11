import { API as FACULTY_API, FacultiesResource } from './faculty/';
import {
    GDSDomainDTO,
    GDSDomainPaginateHelper,
} from 'gds-config';
import { API as SCHOOL_CONFIG_API, SchoolConfigResource } from './school-config/';
import { API as STUDENT_API, StudentsResource } from './student/';

import { Chain } from 'fluid-chains';

const protocol = (req) => {
    return req.connection.encrypted ? 'https://' : 'http://'
};

export class SchoolResource {
    constructor(app) {
        new StudentsResource(app);
        new FacultiesResource(app);
        new SchoolConfigResource(app);

        app.get('/gds', (req, res) => {
            const domain = new GDSDomainDTO();
            domain.addGet('getProfileByStudentId', protocol + host + STUDENT_API + 'student-profile/:studentId');
            domain.addPost('createStudent', protocol + host + STUDENT_API + 'create');
            domain.addPut('updateStudent', protocol + host + STUDENT_API + 'update/:studentId');
            domain.addDelete('deleteStudent', protocol + host + STUDENT_API + 'delete/:studentId');
            domain.addGet('getStudents', protocol + host + STUDENT_API + 'get-students');
            domain.addGet('validateStudentId', protocol + host + STUDENT_API + 'validate-student-id/:studentId');

            domain.addGet('getProfileByFacultyId', protocol + host + FACULTY_API + 'faculty-profile/:facultyId');
            domain.addPost('createFaculty', protocol + host + FACULTY_API + 'create');
            domain.addPut('updateFaculty', protocol + host + FACULTY_API + 'update/:facultyId');
            domain.addDelete('deleteFaculty', protocol + host + FACULTY_API + 'delete/:facultyId');
            domain.addGet('getFaculties', protocol + host + FACULTY_API + 'get-faculties');
            domain.addGet('validateFacultyId', protocol + host + FACULTY_API + 'validate-faculty-id/:facultyId');

            domain.addPost('createSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'create-school-profile');
            domain.addGet('getSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'get-school-profile/:schoolId');
            domain.addPut('updateSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'update-school-profile/:schoolId');
            domain.addDelete('deleteSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'delete-school-profile/:schoolId');

            domain.addPost('createSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'create-school-year');
            domain.addGet('getSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'get-school-year/:schoolYearId');
            domain.addGet('getSchoolYearBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-school-year-by-school/:schoolId');
            domain.addPut('updateSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'update-school-year/:schoolYearId');
            domain.addDelete('deleteSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'delete-school-year/:schoolYearId');

            domain.addPost('createSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'create-school-sem');
            domain.addGet('getSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'get-school-sem/:schoolSemId');
            domain.addGet('getSchoolSemBySchoolYearId', protocol + host + SCHOOL_CONFIG_API + 'get-school-sem-by-school-year/:schoolYearId');
            domain.addPut('updateSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'update-school-sem/:schoolSemId');
            domain.addDelete('deleteSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'delete-school-sem/:schoolSemId');

            domain.addPost('createEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'create-education-level');
            domain.addGet('getEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'get-education-level/:educationLevelId');
            domain.addGet('getEducationLevelBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-education-level-by-school/:schoolId');
            domain.addPut('updateEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'update-education-level/:educationLevelId');
            domain.addDelete('deleteEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'delete-education-level/:educationLevelId');

            domain.addPost('createDepartment', protocol + host + SCHOOL_CONFIG_API + 'create-department');
            domain.addGet('getDepartment', protocol + host + SCHOOL_CONFIG_API + 'get-department/:departmentId');
            domain.addGet('getDepartmentBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-department-by-school/:schoolId');
            domain.addPut('updateDepartment', protocol + host + SCHOOL_CONFIG_API + 'update-department/:departmentId');
            domain.addDelete('deleteDepartment', protocol + host + SCHOOL_CONFIG_API + 'delete-department/:departmentId');

            domain.addPost('createTheme', protocol + host + SCHOOL_CONFIG_API + 'create-theme');
            domain.addGet('getTheme', protocol + host + SCHOOL_CONFIG_API + 'get-theme/:themeId');
            domain.addGet('getThemeBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-theme-by-school/:schoolId');
            domain.addPut('updateTheme', protocol + host + SCHOOL_CONFIG_API + 'update-theme/:themeId');
            domain.addDelete('deleteTheme', protocol + host + SCHOOL_CONFIG_API + 'delete-theme/:themeId');

            domain.addPost('createCode', protocol + host + SCHOOL_CONFIG_API + 'create-code');
            domain.addGet('getCodes', protocol + host + SCHOOL_CONFIG_API + 'get-codes/:codeType/:schoolId');
            domain.addGet('getCode', protocol + host + SCHOOL_CONFIG_API + 'get-code/:schoolId/:codeType/:codeName');
            domain.addPut('updateCode', protocol + host + SCHOOL_CONFIG_API + 'update-code/:codeId');
            domain.addDelete('deleteCode', protocol + host + SCHOOL_CONFIG_API + 'delete-code/:codeId');

            res.status(200).send(domain);
        });
    }
}

export class SchoolResourceChain extends Chain {
    constructor() {
        super('SchoolResourceChain', (context, param, next) => {
            const domain = param.domain();
            const host = param.host();
            const protocol = param.protocol();

            domain.addGet('getProfileByStudentId', protocol + host + STUDENT_API + 'student-profile/:studentId');
            domain.addPost('createStudent', protocol + host + STUDENT_API + 'create');
            domain.addPut('updateStudent', protocol + host + STUDENT_API + 'update/:studentId');
            domain.addDelete('deleteStudent', protocol + host + STUDENT_API + 'delete/:studentId');
            domain.addGet('getStudents', protocol + host + STUDENT_API + 'get-students');
            domain.addGet('validateStudentId', protocol + host + STUDENT_API + 'validate-student-id/:studentId');

            domain.addGet('getProfileByFacultyId', protocol + host + FACULTY_API + 'faculty-profile/:facultyId');
            domain.addPost('createFaculty', protocol + host + FACULTY_API + 'create');
            domain.addPut('updateFaculty', protocol + host + FACULTY_API + 'update/:facultyId');
            domain.addDelete('deleteFaculty', protocol + host + FACULTY_API + 'delete/:facultyId');
            domain.addGet('getFaculties', protocol + host + FACULTY_API + 'get-faculties');
            domain.addGet('validateFacultyId', protocol + host + FACULTY_API + 'validate-faculty-id/:facultyId');

            domain.addPost('createSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'create-school-profile');
            domain.addGet('getSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'get-school-profile/:schoolId');
            domain.addPut('updateSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'update-school-profile/:schoolId');
            domain.addDelete('deleteSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'delete-school-profile/:schoolId');

            domain.addPost('createSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'create-school-year');
            domain.addGet('getSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'get-school-year/:schoolYearId');
            domain.addGet('getSchoolYearBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-school-year-by-school/:schoolId');
            domain.addPut('updateSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'update-school-year/:schoolYearId');
            domain.addDelete('deleteSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'delete-school-year/:schoolYearId');

            domain.addPost('createSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'create-school-sem');
            domain.addGet('getSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'get-school-sem/:schoolSemId');
            domain.addGet('getSchoolSemBySchoolYearId', protocol + host + SCHOOL_CONFIG_API + 'get-school-sem-by-school-year/:schoolYearId');
            domain.addPut('updateSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'update-school-sem/:schoolSemId');
            domain.addDelete('deleteSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'delete-school-sem/:schoolSemId');

            domain.addPost('createEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'create-education-level');
            domain.addGet('getEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'get-education-level/:educationLevelId');
            domain.addGet('getEducationLevelBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-education-level-by-school/:schoolId');
            domain.addPut('updateEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'update-education-level/:educationLevelId');
            domain.addDelete('deleteEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'delete-education-level/:educationLevelId');

            domain.addPost('createDepartment', protocol + host + SCHOOL_CONFIG_API + 'create-department');
            domain.addGet('getDepartment', protocol + host + SCHOOL_CONFIG_API + 'get-department/:departmentId');
            domain.addGet('getDepartmentBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-department-by-school/:schoolId');
            domain.addPut('updateDepartment', protocol + host + SCHOOL_CONFIG_API + 'update-department/:departmentId');
            domain.addDelete('deleteDepartment', protocol + host + SCHOOL_CONFIG_API + 'delete-department/:departmentId');

            domain.addPost('createTheme', protocol + host + SCHOOL_CONFIG_API + 'create-theme');
            domain.addGet('getTheme', protocol + host + SCHOOL_CONFIG_API + 'get-theme/:themeId');
            domain.addGet('getThemeBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-theme-by-school/:schoolId');
            domain.addPut('updateTheme', protocol + host + SCHOOL_CONFIG_API + 'update-theme/:themeId');
            domain.addDelete('deleteTheme', protocol + host + SCHOOL_CONFIG_API + 'delete-theme/:themeId');

            domain.addPost('createCode', protocol + host + SCHOOL_CONFIG_API + 'create-code');
            domain.addGet('getCodes', protocol + host + SCHOOL_CONFIG_API + 'get-codes/:codeType/:schoolId');
            domain.addGet('getCode', protocol + host + SCHOOL_CONFIG_API + 'get-code/:schoolId/:codeType/:codeName');
            domain.addPut('updateCode', protocol + host + SCHOOL_CONFIG_API + 'update-code/:codeId');
            domain.addDelete('deleteCode', protocol + host + SCHOOL_CONFIG_API + 'delete-code/:codeId');

            context.set('domain', domain);
            context.set('host', host);
            context.set('protocol', protocol);
            next();
        });
        this.addSpec('host', true);
        this.addSpec('domain', true);
        this.addSpec('protocol', true);
    }
}



