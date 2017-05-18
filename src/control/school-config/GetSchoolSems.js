import SchoolSem from '../../entity/SchoolSem';
import AppLogger from '../AppLogger';

export default class GetSchoolSems {
    constructor(params, callback) {
        SchoolSem.find(params, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get school sems: ' + params
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
