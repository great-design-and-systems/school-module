import SchoolProfile from '../../entity/SchoolProfile';
import AppLogger from '../AppLogger';

export default class CreateSchoolProfile {
    constructor(schoolProfile, callback) {
        SchoolProfile.create(schoolProfile, (err, created) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed creating new school profile.'
                });
            } else {
                callback(undefined, created);
            }
        });
    }
}
