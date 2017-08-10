import { CREATE_LIBRARY } from './Chain.info';
import { Chain } from 'fluid-chains';
import { SCHOOL_ERROR_HANDLER } from '../util/Chain.info';
import Library from '../../entity/Library';

const Action = (context, param, next) => {
    Library.create({
        libraryName: param.libraryName(),
        level: param.level(),
        schoolId: param.schoolId()
    }, (err, result) => {
        context.set('libraryId', result._id);
        next(err);
    });
}

const CreateLibrary = new Chain(CREATE_LIBRARY,
    Action, undefined, SCHOOL_ERROR_HANDLER);

CreateLibrary.addSpec('libraryName', true);
CreateLibrary.addSpec('level', false);
CreateLibrary.addSpec('schoolId', true);