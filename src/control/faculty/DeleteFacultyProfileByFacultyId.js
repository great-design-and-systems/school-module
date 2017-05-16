import FacultyProfile from '../../entity/FacultyProfile';
import AppLogger from '../AppLogger';

export default class DeleteFacultyProfileByFacultyId {

    constructor(facultyId, callback) {
        FacultyProfile.findByIdAndRemove(facultyId, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed removing faculty ID' + facultyId
                });
            } else {
                callback(null, result);
            }
        });
    }

}