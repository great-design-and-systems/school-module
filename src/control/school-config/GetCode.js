import Code from '../../entity/Code';
import AppLogger from '../AppLogger';

export default class GetCode {
    constructor(params, callback) {
        Code.findOne(params, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get code ' + params
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
