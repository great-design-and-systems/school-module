import FacultyProfile from '../../entity/FacultyProfile';
import AppLogger from '../AppLogger';

export default class UpdateFacultyProfile {

    constructor(id, update, callback) {
        FacultyProfile.update({ _id: id }, update, (err, result) => {
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