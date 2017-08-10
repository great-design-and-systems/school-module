import { Chain } from 'fluid-chains';
import { SCHOOL_ERROR_HANDLER } from './Chain.info';
import { GDSAppLogger } from 'gds-config';

const Action = (context, param, next) => {
    new GDSAppLogger('ERROR: ' + param.$errorFrom() + ': ' + param.$errorMessage())
        .error();
    next();
}
new Chain(SCHOOL_ERROR_HANDLER, Action);