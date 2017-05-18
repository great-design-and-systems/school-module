import SchoolSem from '../../entity/SchoolSem';
import AppLogger from '../AppLogger';

export default class UpdateSchoolSem {
    constructor(id, update, callback) {
        SchoolSem.update({ _id: id }, update, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to update school sem ' + id
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
