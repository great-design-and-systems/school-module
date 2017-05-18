import EducationLevel from '../../entity/EducationLevel';
import AppLogger from '../AppLogger';

export default class GetEducationLevelByEducationLevelId {
    constructor(educationLevelId, callback) {
        EducationLevel.findById(educationLevelId, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get educationLevelId ' + educationLevelId
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
