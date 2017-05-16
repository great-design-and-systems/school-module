import FacultyProfile from '../../entity/FacultyProfile';
import AppLogger from '../AppLogger';

export default class ValidateFacultyId {

    constructor(facultyId, callback) {
        FacultyProfile.findOne({
            facultyId: facultyId
        }, (err, res) => {
            if (err) {
                new AppLogger(err).error();
                callback(undefined, true);
            } else {
                if (res) {
                    callback({
                        message: 'Faculty ID already exists.'
                    });
                } else {
                    callback(undefined, true);
                }
            }
        });
    }
}