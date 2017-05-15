import CreateStudentProfile from '../../control/student/create-student-profile';
import UpdateStudentProfile from '../../control/student/update-student-profile';
import GetStudentProfileByStudentId from '../../control/student/get-student-profile-by-student-id';
import DeleteStudentProfileByStudentId from '../../control/student/delete-student-profile-by-student-id';
import GetStudents from '../../control/student/get-students';
import ValidateStudentId from '../../control/student/validate-student-id';

export default class Students {
    getProfileByStudentId(studentId, callback) {
        new GetStudentProfileByStudentId(studentId, function (err, result) {
            if (err) {
                callback(err);
            } else {
                if (result) {
                    callback(null, result);
                } else {
                    callback(true, null);
                }
            }
        });
    }
    create(param, callback) {
        new CreateStudentProfile({
            studentId: param.studentId,
            firstName: param.firstName,
            middleName: param.middleName,
            lastName: param.lastName,
            gender: param.gender,
            contactNo: param.contactNo,
            emailAddress: param.emailAddress,
            department: param.department,
            level: param.level,
            imageId: param.imageId
        }, callback);
    }
    update(studentId, param, callback) {
        new UpdateStudentProfile(studentId, param, callback);
    }
    removeStudent(studentId, callback) {
        new DeleteStudentProfileByStudentId(studentId, (err) => {
            if (!err) {
                callback(undefined, {
                    message: 'Student has been removed.'
                });
            } else {
                callback(err);
            }
        });
    }
    getStudents(queryParam, callback) {
        console.log(queryParam);
        new GetStudents(queryParam, (err, result) => {
            if (err) {
                callback({message: 'Failed to get student records.'});
            } else {
                callback(undefined, result);
            }
        });
    }
    validateStudentId(studentId, callback) {
        new ValidateStudentId(studentId, callback);
    }
}