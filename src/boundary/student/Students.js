import { CREATE_STUDENT, DELETE_STUDENT, GET_PROFILE_BY_STUDENT_ID, GET_STUDENTS, UPDATE_STUDENT, VALIDATE_STUDENT_ID } from './Chain.info';

import { Chain } from 'fluid-chains';
import CreateStudentProfile from '../../control/student/CreateStudentProfile';
import DeleteStudentProfileByStudentId from '../../control/student/DeleteStudentProfileByStudentId';
import { GDSDomainDTO } from 'gds-stack';
import GetStudentProfileByStudentId from '../../control/student/GetStudentProfileByStudentId';
import GetStudents from '../../control/student/GetStudents';
import UpdateStudentProfile from '../../control/student/UpdateStudentProfile';
import ValidateStudentId from '../../control/student/ValidateStudentId';

const getProfileByStudentIdChain = new Chain(GET_PROFILE_BY_STUDENT_ID, (context, param, next) => {
    new GetStudentProfileByStudentId(param.studentId(), (err, student) => {
        if (err) {
            context.set('status', 500);
            context.set('dto', new GDSDomainDTO('ERROR_' + GET_PROFILE_BY_STUDENT_ID, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new GDSDomainDTO(GET_PROFILE_BY_STUDENT_ID, student));
            next();
        }
    });
});
getProfileByStudentIdChain.addSpec('studentId', true);

const createStudentChain = new Chain(CREATE_STUDENT, (context, param, next) => {
    new CreateStudentProfile({
        studentId: param.studentId(),
        firstName: param.firstName(),
        middleName: param.middleName ? param.middleName() : undefined,
        lastName: param.lastName(),
        gender: param.gender ? param.gender() : undefined,
        contactNo: param.contactNo ? param.contactNo() : undefined,
        emailAddress: param.emailAddress(),
        department: param.department(),
        level: param.level(),
        imageId: param.imageId ? param.imageId() : undefined
    }, (err, result) => {
        if (err) {
            context.set('status', 500);
            context.set('dto', new GDSDomainDTO('ERROR_' + CREATE_STUDENT, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new GDSDomainDTO(CREATE_STUDENT, { id: result._id, studentId: result.studentId }));
            next();
        }
    });

});
createStudentChain.addSpec('studentId', true);
createStudentChain.addSpec('firstName', true);
createStudentChain.addSpec('middleName');
createStudentChain.addSpec('lastName', true);
createStudentChain.addSpec('gender');
createStudentChain.addSpec('contactNo');
createStudentChain.addSpec('emailAddress', true, (done) => {
    //TODO: validate email here done(value:Boolean, message:String)
});
createStudentChain.addSpec('department', true);
createStudentChain.addSpec('level', true);
createStudentChain.addSpec('imageId');

const updateStudentChain = new Chain(UPDATE_STUDENT, (context, param, next) => {
    new UpdateStudentProfile(param.studentId(), param.inputData(),
        (err, result) => {
            if (err) {
                context.set('status', 500);
                context.set('dto', new GDSDomainDTO('ERROR_' + UPDATE_STUDENT, err));
                next();
            } else {
                context.set('status', 200);
                context.set('dto', new GDSDomainDTO(UPDATE_STUDENT, result));
                next();
            }
        });
});
updateStudentChain.addSpec('inputData', true);
updateStudentChain.addSpec('facultyId', true);

const deleteStudentChain = new Chain(DELETE_STUDENT, (context, param, next) => {
    new DeleteStudentProfileByStudentId(param.studentId(), (err) => {
        if (err) {
            context.set('status', 500);
            context.set('dto', new GDSDomainDTO('ERROR_' + DELETE_STUDENT, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new GDSDomainDTO(DELETE_STUDENT, 'Student has been removed.'));
            next();
        }
    });
});

deleteStudentChain.addSpec('studentId', true);

const getStudentsChain = new Chain(GET_STUDENTS, (context, param, next) => {
    const query = param.query ? param.query() : {};
    getStudents(query, (err, students) => {
        if (err) {
            context.set('status', 500);
            context.set('dto', new GDSDomainDTO('ERROR_' + GET_STUDENTS, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new GDSDomainDTO(GET_STUDENTS, students));
            next();
        }
    });
});
getStudentsChain.addSpec('query');

const validateStudentIdChain = new Chain(VALIDATE_STUDENT_ID, (context, param, next) => {
    new ValidateStudentId(param.studentId(), (err, result) => {
        if (err) {
            context.set('status', 500);
            context.set('dto', new GDSDomainDTO('ERROR_' + VALIDATE_STUDENT_ID, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new GDSDomainDTO(VALIDATE_STUDENT_ID, result));
            next();
        }
    });
});
validateStudentIdChain.addSpec('studentId', true);