
import { Chain } from 'fluid-chains';
import { SCHOOL_ERROR_HANDLER } from '../util/Chain.info';
import { GET_LIBRARY } from './Chain.info';
import Library from '../../entity/Library';

const Action = (context, param, next) => {
    const query = param.query ? param.query() : {};
    const page = param.page();
    const limit = param.limit();
    Library.paginate(query, {
      page: page ? parseInt(page) : 1,
      limit: limit ? parseInt(limit) : 10,
      sort: param.sort()
    }, (err, result) => {
        context.set('library', result);
        next(err);
    });
}

const GetLibrary = new Chain(GET_LIBRARY, Action,
    undefined, SCHOOL_ERROR_HANDLER);

GetLibrary.addSpec('query', true);
GetLibrary.addSpec('page', false);
GetLibrary.addSpec('limit', false);
GetLibrary.addSpec('sort', false);