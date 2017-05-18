import Code from '../../entity/Code';
import AppLogger from '../AppLogger';

export default class UpdateCode {
    constructor(id, update, callback) {
        Code.update({ _id: id }, update, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to update codeId ' + id
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
