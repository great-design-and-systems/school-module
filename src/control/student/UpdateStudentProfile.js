import StudentProfile from '../../entity/StudentProfile';
import AppLogger from '../AppLogger';

export default class UpdateStudentProfile {

    constructor(id, update, callback) {
        StudentProfile.update({ _id: id }, update, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to update student: ' + id
                });
            } else {
                callback(null, result);
            }
        });
    }
}