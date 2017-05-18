import SchoolYear from '../../entity/SchoolYear';
import AppLogger from '../AppLogger';

export default class CreateSchoolYear {
    constructor(schoolYear, callback) {
        SchoolYear.create(schoolYear, (err, created) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed creating new school year.'
                });
            } else {
                callback(undefined, created);
            }
        });
    }
}
