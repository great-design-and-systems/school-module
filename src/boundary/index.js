import {
    GDSDomainDTO,
    GDSDomainPaginateHelper,
} from 'gds-config';
import { API as STUDENT_API, StudentsResource } from './student/';
import { API as FACULTY_API, FacultiesResource } from './faculty/';

const protocol = (req) => {
    return req.connection.encrypted ? 'https://' : 'http://'
}

export default class SchoolResource {
    constructor(app) {
        new StudentsResource(app);
        new FacultiesResource(app);

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
            res.status(200).send(domain);
        });
    }
}