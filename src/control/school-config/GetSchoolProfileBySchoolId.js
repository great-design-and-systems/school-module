import SchoolProfile from '../../entity/SchoolProfile';
import AppLogger from '../AppLogger';

export default class GetSchoolProfileBySchoolId {
    constructor(schoolId, callback) {
        SchoolProfile.findById(schoolId, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get schoolId ' + schoolId
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
