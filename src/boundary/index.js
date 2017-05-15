import {
    GDSDomainDTO,
    GDSDomainPaginateHelper,
} from 'gds-config';
import { API as STUDENT_API, StudentsResource } from './student/';

const protocol = (req) => {
    return req.connection.encrypted ? 'https://' : 'http://'
}

export default class SchoolResource {
    constructor(app) {
        new StudentsResource(app);

        app.get('/', (req, res) => {
            const domain = new GDSDomainDTO();
            domain.addGet('getProfileByStudentId', protocol(req) + req.headers.host + STUDENT_API + 'student-profile/:studentId');
            domain.addPost('createStudent', protocol(req) + req.headers.host + STUDENT_API + 'create');
            domain.addPut('updateStudent', protocol(req) + req.headers.host + STUDENT_API + 'update/:studentId');
            domain.addDelete('deleteStudent', protocol(req) + req.headers.host + STUDENT_API + 'delete/:studentId');
            domain.addGet('getStudents', protocol(req) + req.headers.host + STUDENT_API + 'get-students');
            domain.addGet('validateStudentId', protocol(req) + req.headers.host + STUDENT_API + 'validate-student-id/:studentId');
            res.status(200).send(domain);
        });
    }
}