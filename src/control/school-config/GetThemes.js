import Theme from '../../entity/Theme';
import AppLogger from '../AppLogger';

export default class GetThemes {
    constructor(params, callback) {
        Theme.find(params, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get themes: ' + params
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
