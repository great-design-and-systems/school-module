import { NotFound, CreateFacultyResponse } from '../../control/Response';

import Faculties from './Faculties';

export const API = '/api/faculty/';

export class FacultiesResource {
    constructor(app) {
        const Faculty = new Faculties();
        app.get(API + 'faculty-profile/:facultyId', (req, res) => {
            Faculty.getProfileByFacultyId(req.params.facultyId, (err, result) => {
                if (err) {
                    res.status(404).send(NotFound('Faculty profile'));
                } else {
                    res.status(200).send(result);
                }
            });
        });
        app.post(API + 'create', (req, res) => {
            Faculty.create(req.body, (err, result) => {
                CreateResponse(req, res, err, result);
            });
        });
        app.put(API + 'update/:id', (req, res) => {
            Faculty.update(req.params.id, req.body, (err, numberAffected, response) => {
                if (err) {
                    res.status(500).send(response);
                } else {
                    console.log(numberAffected);
                    res.status(200).send(numberAffected);
                }
            });
        });
        app.delete(API + 'delete/:facultyId', (req, res) => {
            Faculty.removeFaculty(req.params.facultyId, (err, result) => {
                if (err) {
                    res.status(500).send({
                        message: 'Failed to remove faculty id ' + req.params.facultyId + '.'
                    });
                } else {
                    res.status(200).send(result);
                }
            });
        });
        app.get(API + 'get-faculties', (req, res) => {
            Faculty.getFaculties(req.query, (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(result);
                }
            });
        });
        app.get(API + 'validate-faculty-id/:facultyId', (req, res) => {
            Faculty.validateFacultyId(req.params.facultyId, (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(result);
                }
            });
        });

    }
}