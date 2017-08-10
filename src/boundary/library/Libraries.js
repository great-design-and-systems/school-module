import { CREATE_LIBRARY, DELETE_LIBRARY, GET_LIBRARY, UPDATE_LIBRARY } from './Chain.info';

import { Chain, ExecuteChain } from 'fluid-chains';
import { GDSDomainDTO } from 'gds-stack';
import { Library } from '../../control/';

const createLibraryChain = new Chain(CREATE_LIBRARY, (context, param, next) => {
    const library = param.libraryData();
    ExecuteChain(Library.CREATE_LIBRARY, {
        libraryName: library.libraryName,
        level: library.level,
        schoolId: library.schoolId
    }, result => {
        if (result.$err) {
            context.set('status', 500);
            context.set('dto', new GDSDomainDTO('ERROR_' + CREATE_LIBRARY, result.$errorMessage()));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new GDSDomainDTO(CREATE_LIBRARY, {
                libraryId: result.libraryId()
            }));
            next();
        }
    });

});
createLibraryChain.addSpec('libraryData', true);

const updateLibraryChain = new Chain(UPDATE_LIBRARY, (context, param, next) => {
    ExecuteChain(Library.UPDATE_LIBRARY, {
        libraryId: param.libraryId(),
        inputData: param.inputData()
    }, result => {
        if (result.$err) {
            context.set('status', 500);
            context.set('dto', new GDSDomainDTO('ERROR_' + UPDATE_LIBRARY, result.$errorMessage()));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new GDSDomainDTO(UPDATE_LIBRARY, 'Library has been updated successfully.'));
            next();
        }
    });
});
updateLibraryChain.addSpec('libraryId', true);
updateLibraryChain.addSpec('inputData', true);

const deleteLibraryChain = new Chain(DELETE_LIBRARY, (context, param, next) => {
    ExecuteChain(Library.DELETE_LIBRARY, {
        libraryId: param.libraryId()
    }, result => {
      if (result.$err) {
        context.set('status', 500);
        context.set('dto', new GDSDomainDTO('ERROR_' + DELETE_LIBRARY, result.$errorMessage()));
        next();
      } else {
        context.set('status', 200);
        context.set('dto', new GDSDomainDTO(DELETE_LIBRARY, 'Library has been deleted successfully.'));
        next();
      }
    });
});
deleteLibraryChain.addSpec('libraryId', true);

const getLibraryChain = new Chain(GET_LIBRARY, (context, param, next) => {
  const query = param.query ? param.query() : {};
  const page = query.page;
  const limit = query.limit;
  const sort = query.sort;
  delete query.page;
  delete query.limit;
  delete query.sort;
  ExecuteChain(Library.GET_LIBRARY, {
    query: query,
    page: page,
    limit: limit,
    sort: sort
  }, result => {
    if (result.$err) {
      context.set('status', 500);
      context.set('dto', new GDSDomainDTO('ERROR_' + GET_LIBRARY, result.$errorMessage()));
      next();
    } else {
      context.set('status', 200);
      context.set('dto', new GDSDomainDTO(GET_LIBRARY, result.library()));
      next();
    }
  });
});
getLibraryChain.addSpec('query', true);
