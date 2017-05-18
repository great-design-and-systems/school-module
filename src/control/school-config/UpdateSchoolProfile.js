import SchoolProfile from '../../entity/SchoolProfile';
import AppLogger from '../AppLogger';

export default class UpdateSchoolProfile {
    constructor(id, update, callback) {
        SchoolProfile.update({ _id: id }, update, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to update school profile ' + id
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
