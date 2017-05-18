import Theme from '../../entity/Theme';
import AppLogger from '../AppLogger';

export default class DeleteTheme {
    constructor(themeId, callback) {
        Theme.remove({
            _id: themeId
        }, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed deleting themeId ' + themeId
                });
            } else {
                callback(null, result);
            }
        });
    }
}
