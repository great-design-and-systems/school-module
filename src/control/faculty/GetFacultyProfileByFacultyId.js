import FacultyProfile from '../../entity/FacultyProfile';
import AppLogger from '../AppLogger';

export default class GetFacultyProfileByFacultyId {
    constructor(facultyId, callback) {
        FacultyProfile.findOne({
            facultyId: facultyId
        }, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get faculty ID' + facultyId
                });
            } else {
                callback(null, result);
            }
        });
    }

}