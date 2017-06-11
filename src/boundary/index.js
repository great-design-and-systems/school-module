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
            const dto = new GDSDomainDTO();
            dto.addGet('getProfileByStudentId', protocol + host + STUDENT_API + 'student-profile/:studentId');
            dto.addPost('createStudent', protocol + host + STUDENT_API + 'create');
            dto.addPut('updateStudent', protocol + host + STUDENT_API + 'update/:studentId');
            dto.addDelete('deleteStudent', protocol + host + STUDENT_API + 'delete/:studentId');
            dto.addGet('getStudents', protocol + host + STUDENT_API + 'get-students');
            dto.addGet('validateStudentId', protocol + host + STUDENT_API + 'validate-student-id/:studentId');

            dto.addGet('getProfileByFacultyId', protocol + host + FACULTY_API + 'faculty-profile/:facultyId');
            dto.addPost('createFaculty', protocol + host + FACULTY_API + 'create');
            dto.addPut('updateFaculty', protocol + host + FACULTY_API + 'update/:facultyId');
            dto.addDelete('deleteFaculty', protocol + host + FACULTY_API + 'delete/:facultyId');
            dto.addGet('getFaculties', protocol + host + FACULTY_API + 'get-faculties');
            dto.addGet('validateFacultyId', protocol + host + FACULTY_API + 'validate-faculty-id/:facultyId');

            dto.addPost('createSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'create-school-profile');
            dto.addGet('getSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'get-school-profile/:schoolId');
            dto.addPut('updateSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'update-school-profile/:schoolId');
            dto.addDelete('deleteSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'delete-school-profile/:schoolId');

            dto.addPost('createSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'create-school-year');
            dto.addGet('getSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'get-school-year/:schoolYearId');
            dto.addGet('getSchoolYearBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-school-year-by-school/:schoolId');
            dto.addPut('updateSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'update-school-year/:schoolYearId');
            dto.addDelete('deleteSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'delete-school-year/:schoolYearId');

            dto.addPost('createSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'create-school-sem');
            dto.addGet('getSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'get-school-sem/:schoolSemId');
            dto.addGet('getSchoolSemBySchoolYearId', protocol + host + SCHOOL_CONFIG_API + 'get-school-sem-by-school-year/:schoolYearId');
            dto.addPut('updateSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'update-school-sem/:schoolSemId');
            dto.addDelete('deleteSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'delete-school-sem/:schoolSemId');

            dto.addPost('createEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'create-education-level');
            dto.addGet('getEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'get-education-level/:educationLevelId');
            dto.addGet('getEducationLevelBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-education-level-by-school/:schoolId');
            dto.addPut('updateEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'update-education-level/:educationLevelId');
            dto.addDelete('deleteEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'delete-education-level/:educationLevelId');

            dto.addPost('createDepartment', protocol + host + SCHOOL_CONFIG_API + 'create-department');
            dto.addGet('getDepartment', protocol + host + SCHOOL_CONFIG_API + 'get-department/:departmentId');
            dto.addGet('getDepartmentBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-department-by-school/:schoolId');
            dto.addPut('updateDepartment', protocol + host + SCHOOL_CONFIG_API + 'update-department/:departmentId');
            dto.addDelete('deleteDepartment', protocol + host + SCHOOL_CONFIG_API + 'delete-department/:departmentId');

            dto.addPost('createTheme', protocol + host + SCHOOL_CONFIG_API + 'create-theme');
            dto.addGet('getTheme', protocol + host + SCHOOL_CONFIG_API + 'get-theme/:themeId');
            dto.addGet('getThemeBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-theme-by-school/:schoolId');
            dto.addPut('updateTheme', protocol + host + SCHOOL_CONFIG_API + 'update-theme/:themeId');
            dto.addDelete('deleteTheme', protocol + host + SCHOOL_CONFIG_API + 'delete-theme/:themeId');

            dto.addPost('createCode', protocol + host + SCHOOL_CONFIG_API + 'create-code');
            dto.addGet('getCodes', protocol + host + SCHOOL_CONFIG_API + 'get-codes/:codeType/:schoolId');
            dto.addGet('getCode', protocol + host + SCHOOL_CONFIG_API + 'get-code/:schoolId/:codeType/:codeName');
            dto.addPut('updateCode', protocol + host + SCHOOL_CONFIG_API + 'update-code/:codeId');
            dto.addDelete('deleteCode', protocol + host + SCHOOL_CONFIG_API + 'delete-code/:codeId');

            res.status(200).send(dto);
        });
    }
}

export class SchoolResourceChain extends Chain {
    constructor() {
        super('SchoolResourceChain', (context, param, next) => {
            const domain = param.domain ? param.domain() : [];
            const host = param.host();
            const protocol = param.protocol();
            const dto = new GDSDomainDTO();
            console.log('SchoolResourceChain', domain);
            dto.setDomainName('School');
            dto.addGet('getProfileByStudentId', protocol + host + STUDENT_API + 'student-profile/:studentId');
            dto.addPost('createStudent', protocol + host + STUDENT_API + 'create');
            dto.addPut('updateStudent', protocol + host + STUDENT_API + 'update/:studentId');
            dto.addDelete('deleteStudent', protocol + host + STUDENT_API + 'delete/:studentId');
            dto.addGet('getStudents', protocol + host + STUDENT_API + 'get-students');
            dto.addGet('validateStudentId', protocol + host + STUDENT_API + 'validate-student-id/:studentId');

            dto.addGet('getProfileByFacultyId', protocol + host + FACULTY_API + 'faculty-profile/:facultyId');
            dto.addPost('createFaculty', protocol + host + FACULTY_API + 'create');
            dto.addPut('updateFaculty', protocol + host + FACULTY_API + 'update/:facultyId');
            dto.addDelete('deleteFaculty', protocol + host + FACULTY_API + 'delete/:facultyId');
            dto.addGet('getFaculties', protocol + host + FACULTY_API + 'get-faculties');
            dto.addGet('validateFacultyId', protocol + host + FACULTY_API + 'validate-faculty-id/:facultyId');

            dto.addPost('createSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'create-school-profile');
            dto.addGet('getSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'get-school-profile/:schoolId');
            dto.addPut('updateSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'update-school-profile/:schoolId');
            dto.addDelete('deleteSchoolProfile', protocol + host + SCHOOL_CONFIG_API + 'delete-school-profile/:schoolId');

            dto.addPost('createSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'create-school-year');
            dto.addGet('getSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'get-school-year/:schoolYearId');
            dto.addGet('getSchoolYearBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-school-year-by-school/:schoolId');
            dto.addPut('updateSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'update-school-year/:schoolYearId');
            dto.addDelete('deleteSchoolYear', protocol + host + SCHOOL_CONFIG_API + 'delete-school-year/:schoolYearId');

            dto.addPost('createSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'create-school-sem');
            dto.addGet('getSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'get-school-sem/:schoolSemId');
            dto.addGet('getSchoolSemBySchoolYearId', protocol + host + SCHOOL_CONFIG_API + 'get-school-sem-by-school-year/:schoolYearId');
            dto.addPut('updateSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'update-school-sem/:schoolSemId');
            dto.addDelete('deleteSchoolSem', protocol + host + SCHOOL_CONFIG_API + 'delete-school-sem/:schoolSemId');

            dto.addPost('createEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'create-education-level');
            dto.addGet('getEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'get-education-level/:educationLevelId');
            dto.addGet('getEducationLevelBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-education-level-by-school/:schoolId');
            dto.addPut('updateEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'update-education-level/:educationLevelId');
            dto.addDelete('deleteEducationLevel', protocol + host + SCHOOL_CONFIG_API + 'delete-education-level/:educationLevelId');

            dto.addPost('createDepartment', protocol + host + SCHOOL_CONFIG_API + 'create-department');
            dto.addGet('getDepartment', protocol + host + SCHOOL_CONFIG_API + 'get-department/:departmentId');
            dto.addGet('getDepartmentBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-department-by-school/:schoolId');
            dto.addPut('updateDepartment', protocol + host + SCHOOL_CONFIG_API + 'update-department/:departmentId');
            dto.addDelete('deleteDepartment', protocol + host + SCHOOL_CONFIG_API + 'delete-department/:departmentId');

            dto.addPost('createTheme', protocol + host + SCHOOL_CONFIG_API + 'create-theme');
            dto.addGet('getTheme', protocol + host + SCHOOL_CONFIG_API + 'get-theme/:themeId');
            dto.addGet('getThemeBySchoolId', protocol + host + SCHOOL_CONFIG_API + 'get-theme-by-school/:schoolId');
            dto.addPut('updateTheme', protocol + host + SCHOOL_CONFIG_API + 'update-theme/:themeId');
            dto.addDelete('deleteTheme', protocol + host + SCHOOL_CONFIG_API + 'delete-theme/:themeId');

            dto.addPost('createCode', protocol + host + SCHOOL_CONFIG_API + 'create-code');
            dto.addGet('getCodes', protocol + host + SCHOOL_CONFIG_API + 'get-codes/:codeType/:schoolId');
            dto.addGet('getCode', protocol + host + SCHOOL_CONFIG_API + 'get-code/:schoolId/:codeType/:codeName');
            dto.addPut('updateCode', protocol + host + SCHOOL_CONFIG_API + 'update-code/:codeId');
            dto.addDelete('deleteCode', protocol + host + SCHOOL_CONFIG_API + 'delete-code/:codeId');

            domain.push(dto);
            context.set('domain', domain);
            next();
        });
        this.addSpec('host', true);
        this.addSpec('protocol', true);
        this.addSpec('domain', false);
    }
}



