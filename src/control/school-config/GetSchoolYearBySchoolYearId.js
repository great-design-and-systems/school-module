import SchoolYear from '../../entity/SchoolYear';
import AppLogger from '../AppLogger';

export default class GetSchoolYearBySchoolYearId {
    constructor(schoolYearId, callback) {
        SchoolYear.findById(schoolYearId, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get schoolYearId ' + schoolYearId
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
