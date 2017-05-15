import StudentProfile from '../../entity/StudentProfile';
import AppLogger from '../AppLogger';

export default class GetStudentProfileByStudentId {
    constructor(studentId, callback) {
        StudentProfile.findOne({
            studentId: studentId
        }, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get student ID' + studentId
                });
            } else {
                callback(null, result);
            }
        });
    }

}