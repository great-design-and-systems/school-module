import { Chain } from 'fluid-chains';
import { SCHOOL_ERROR_HANDLER } from '../util/Chain.info';
import { DELETE_LIBRARY } from './Chain.info';
import Library from '../../entity/Library';

const Action = (context, param, next) => {
    Library.findByIdAndRemove(param.libraryId(), err => {
        next(err);
    });
}

const DeleteLibrary = new Chain(DELETE_LIBRARY, Action,
    undefined, SCHOOL_ERROR_HANDLER);

DeleteLibrary.addSpec('libraryId', true);