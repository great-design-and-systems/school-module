import Department from '../../entity/Department';
import AppLogger from '../AppLogger';

export default class UpdateDepartment {
    constructor(id, update, callback) {
        Department.update({ _id: id }, update, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to update departmentId ' + id
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
