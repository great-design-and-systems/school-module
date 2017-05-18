import EducationLevel from '../../entity/EducationLevel';
import AppLogger from '../AppLogger';

export default class CreateEducationLevel {
    constructor(educationLevel, callback) {
        EducationLevel.create(educationLevel, (err, created) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed creating new education level.'
                });
            } else {
                callback(undefined, created);
            }
        });
    }
}
