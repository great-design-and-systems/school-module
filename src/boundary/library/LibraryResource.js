import * as Chain from './Chain.info';

import { ExecuteChain } from 'fluid-chains';

export default class LibraryResource {
    constructor(resource) {
        resource.post(Chain.CREATE_LIBRARY, 'library/create', (req, res) => {
            ExecuteChain(Chain.CREATE_LIBRARY, {
                libraryData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        });

        resource.put(Chain.UPDATE_LIBRARY, 'library/update/:libraryId', (req, res) => {
            ExecuteChain(Chain.UPDATE_LIBRARY, {
                libraryId: req.params.libraryId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        });

        resource.delete(Chain.DELETE_LIBRARY, 'library/delete/:libraryId', (req, res) => {
            ExecuteChain(Chain.DELETE_LIBRARY, {
                libraryId: req.params.libraryId
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        });

        resource.get(Chain.GET_LIBRARY, 'library/get-library', (req, res) => {
            ExecuteChain(Chain.GET_LIBRARY, {
                query: req.query
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        });
    }
}