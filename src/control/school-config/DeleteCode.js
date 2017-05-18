import Code from '../../entity/Code';
import AppLogger from '../AppLogger';

export default class DeleteCode {
    constructor(codeId, callback) {
        Code.remove({
            _id: codeId
        }, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed deleting codeId ' + codeId
                });
            } else {
                callback(null, result);
            }
        });
    }
}
