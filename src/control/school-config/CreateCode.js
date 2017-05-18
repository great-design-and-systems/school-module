import Code from '../../entity/Code';
import AppLogger from '../AppLogger';

export default class CreateCode {
    constructor(code, callback) {
        Code.create(code, (err, created) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed creating new code.'
                });
            } else {
                callback(undefined, created);
            }
        });
    }
}
