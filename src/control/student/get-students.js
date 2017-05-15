import StudentProfile from '../../entity/StudentProfile';
import AppLogger from '../AppLogger';

export default class GetStudents {
    constructor(param, callback) {
        StudentProfile.paginate({}, {
            page: parseInt(param.page),
            limit: parseInt(param.limit),
            sort: param.sort
        }, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get students.'
                });
            } else {
                callback(null, result);
            }
        });
    }
}