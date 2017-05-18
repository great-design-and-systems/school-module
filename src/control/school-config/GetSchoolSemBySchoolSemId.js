import SchoolSem from '../../entity/SchoolSem';
import AppLogger from '../AppLogger';

export default class GetSchoolSemBySchoolSemId {
    constructor(schoolSemId, callback) {
        SchoolSem.findById(schoolSemId, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get schoolSemId ' + schoolSemId
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
