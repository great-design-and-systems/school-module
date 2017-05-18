import SchoolYear from '../../entity/SchoolYear';
import AppLogger from '../AppLogger';

export default class UpdateSchoolYear {
    constructor(id, update, callback) {
        SchoolYear.update({ _id: id }, update, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to update school year ' + id
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
