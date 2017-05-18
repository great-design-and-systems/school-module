import Theme from '../../entity/Theme';
import AppLogger from '../AppLogger';

export default class UpdateTheme {
constructor(id, update, callback) {
	Theme.update({_id : id}, update, (err, result) => {
        if (err) {
            new AppLogger(err).error();
            callback({
                message: 'Failed to update theme ' + id
            });
        } else {
            callback(undefined, result);
        }
    });
}
}
