import Department from '../../entity/Department';
import AppLogger from '../AppLogger';

export default class DeleteDepartment {
    constructor(departmentId, callback) {
        Department.remove({
            _id: departmentId
        }, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed deleting departmentId ' + departmentId
                });
            } else {
                callback(null, result);
            }
        });
    }
}
