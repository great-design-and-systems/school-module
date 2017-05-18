import Department from '../../entity/Department';
import AppLogger from '../AppLogger';

export default class GetDepartments {
    constructor(params, callback) {
        Department.find(params, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get departments: ' + params
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
