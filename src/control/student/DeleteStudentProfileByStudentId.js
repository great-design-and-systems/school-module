import StudentProfile from '../../entity/StudentProfile';
import AppLogger from '../AppLogger';

export default class DeleteStudentProfileByStudentId {

    constructor(studentId, callback) {
        StudentProfile.findByIdAndRemove(studentId, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed removing student ID' + studentId
                });
            } else {
                callback(null, result);
            }
        });
    }

}