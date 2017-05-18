import SchoolYear from '../../entity/SchoolYear';
import AppLogger from '../AppLogger';

export default class GetSchoolYears {
    constructor(params, callback) {
        SchoolYear.find(params, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get school year:  ' + params
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
