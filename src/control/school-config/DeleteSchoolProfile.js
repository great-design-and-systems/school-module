import SchoolProfile from '../../entity/SchoolProfile';
import AppLogger from '../AppLogger';

export default class DeleteSchoolProfile {
    constructor(schoolId, callback) {
        SchoolProfile.remove({
            _id: schoolId
        }, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed deleting schoolId ' + schoolId
                });
            } else {
                callback(null, result);
            }
        });
    }
}
