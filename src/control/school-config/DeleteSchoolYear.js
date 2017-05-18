import SchoolYear from '../../entity/SchoolYear';
import AppLogger from '../AppLogger';

export default class DeleteSchoolYear {
    constructor(schoolYearId, callback) {
        SchoolYear.remove({
            _id: schoolYearId
        }, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed deleting schoolYearId ' + schoolYearId
                });
            } else {
                callback(null, result);
            }
        });
    }
}
