import Department from '../../entity/Department';
import AppLogger from '../AppLogger';

export default class CreateDepartment {
    constructor(department, callback) {
        Department.create(department, (err, created) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed creating new department.'
                });
            } else {
                callback(undefined, created);
            }
        });
    }
}

