import EducationLevel from '../../entity/EducationLevel';
import AppLogger from '../AppLogger';

export default class UpdateEducationLevel {
    constructor(id, update, callback) {
        EducationLevel.update({ _id: id }, update, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to update educationLevelId ' + id
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
