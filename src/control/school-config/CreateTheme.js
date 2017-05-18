import Theme from '../../entity/Theme';
import AppLogger from '../AppLogger';

export default class CreateTheme {
    constructor(theme, callback) {
        Theme.create(theme, (err, created) => {
            if (err) {
                new AppLogger(err).error();
                callback({
                    message: 'Failed creating new theme.'
                });
            } else {
                callback(undefined, created);
            }
        });
    }
}
