import { Chain } from 'fluid-chains';
import { SCHOOL_ERROR_HANDLER } from '../util/Chain.info';
import { UPDATE_LIBRARY } from './Chain.info';
import Library from '../../entity/Library';

const Action = (context, param, next) => {
    Library.update({ _id: param.libraryId() }, param.inputData(), (err, result) => {
        context.set('updateLibrary', result);
        next(err);
    });
}

const UpdateLibrary = new Chain(UPDATE_LIBRARY, Action,
    undefined, SCHOOL_ERROR_HANDLER);

UpdateLibrary.addSpec('libraryId', true);
UpdateLibrary.addSpec('inputData', true);