import SchoolSem from '../../entity/SchoolSem';
import AppLogger from '../AppLogger';

export default class DeleteSchoolSem {
    constructor(schoolSemId, callback) {
        SchoolSem.remove({
            _id: schoolSemId
        }, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed deleting schoolSemId ' + schoolSemId
                });
            } else {
                callback(null, result);
            }
        });
    }
}
