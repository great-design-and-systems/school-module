import Department from '../../entity/Department';
import AppLogger from '../AppLogger';

export default class GetDepartmentByDepartmentId {
    constructor(departmentId, callback) {
        Department.findById(departmentId, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get departmentId ' + departmentId
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
