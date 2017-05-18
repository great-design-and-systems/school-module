import EducationLevel from '../../entity/EducationLevel';
import AppLogger from '../AppLogger';

export default class DeleteEducationLevel {
    constructor(educationLevelId, callback) {
        EducationLevel.remove({
            _id: educationLevelId
        }, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed deleting educationLevelId ' + educationLevelId
                });
            } else {
                callback(null, result);
            }
        });
    }
}
