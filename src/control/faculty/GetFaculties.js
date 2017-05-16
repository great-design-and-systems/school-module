import FacultyProfile from '../../entity/FacultyProfile';
import AppLogger from '../AppLogger';

export default class GetFaculties {
    constructor(param, callback) {
        FacultyProfile.paginate({}, {
            page: parseInt(param.page),
            limit: parseInt(param.limit),
            sort: param.sort
        }, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get faculties.'
                });
            } else {
                callback(null, result);
            }
        });
    }
}