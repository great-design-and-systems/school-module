import StudentProfile from '../../entity/StudentProfile';
import AppLogger from '../AppLogger';

export default class ValidateStudentId {

    constructor(studentId, callback) {
        StudentProfile.findOne({
            studentId: studentId
        }, (err, res) => {
            if (err) {
                new AppLogger(err).error();
                callback(undefined, true);
            } else {
                if (res) {
                    callback({
                        message: 'Student ID already exists.'
                    });
                } else {
                    callback(undefined, true);
                }
            }
        });
    }
}