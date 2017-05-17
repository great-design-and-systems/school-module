import StudentProfile from '../../entity/StudentProfile';
import AppLogger from '../AppLogger';

export default class CreateStudentProfile {
    constructor(studentProfile, callback) {
        StudentProfile.create(studentProfile, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to create student profile.'
                });
            } else {
                callback(null, result);
            }
        });
    }

}