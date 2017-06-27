import { CreateFacultyResponse, NotFound } from '../../control/Response';

import { ExecuteChain } from 'fluid-chains';
import FacultyChains from './Chain.info';

export default class FacultyResource {
    constructor(resource) {
        resource.get(FacultyChains.GET_PROFILE_BY_FACULTY_ID, '/faculty/faculty-profile/:facultyId', (req, res) => {
            ExecuteChain(GET_PROFILE_BY_FACULTY_ID, {
                facultyId: req.params.facultyId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });

        resource.post(FacultyChains.CREATE_FACULTY, 'faculty/create', (req, res) => {
            ExecuteChain(FacultyChains.CREATE_FACULTY, {
                facultyId: req.body.facultyId,
                firstName: req.body.firstName,
                middleName: req.body.middleName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                contactNo: req.body.contactNo,
                emailAddress: req.body.emailAddress,
                department: req.body.department,
                imageId: req.body.imageId
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        });
    }
}

export class FacultiesResource {
    constructor(app) {
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