import FacultyProfile from '../../entity/FacultyProfile';
import AppLogger from '../AppLogger';

export default class CreateFacultyProfile {
    constructor(facultyProfile, callback) {
        FacultyProfile.create(facultyProfile, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to create faculty profile.'
                });
            } else {
                callback(null, result);
            }
        });
    }

}