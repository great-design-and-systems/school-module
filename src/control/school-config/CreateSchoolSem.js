import SchoolSem from '../../entity/SchoolSem';
import AppLogger from '../AppLogger';

export default class CreateSchoolSem {
    constructor(schoolSem, callback) {
        SchoolSem.create(schoolSem, (err, created) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed creating new school sem.'
                });
            } else {
                callback(undefined, created);
            }
        });
    }
}
