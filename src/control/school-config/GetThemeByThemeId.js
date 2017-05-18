import Theme from '../../entity/Theme';
import AppLogger from '../AppLogger';

export default class GetThemeByThemeId {
    constructor(themeId, callback) {
        Theme.findById(themeId, (err, result) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed to get themeId ' + themeId
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}
