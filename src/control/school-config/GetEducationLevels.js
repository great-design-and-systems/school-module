import EducationLevel from '../../entity/EducationLevel';
import AppLogger from '../AppLogger';

export default class GetEducationLevels {
    constructor(params, callback) {
        EducationLevel.find(params, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get education levels: ' + params
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
