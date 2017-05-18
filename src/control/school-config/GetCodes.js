import Code from '../../entity/Code';
import AppLogger from '../AppLogger';

export default class GetCodes {
    constructor(params, callback) {
        Code.find(params, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get code records: ' + params
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
