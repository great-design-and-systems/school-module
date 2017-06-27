import { CREATE_FACULTY, DELETE_FACULTY, GET_FACULTIES, GET_PROFILE_BY_FACULTY_ID, UPDATE_FACULTY, VALIDATE_FACULTY_ID } from './Chain.info';

import { ExecuteChain } from 'fluid-chains';

export default class FacultyResource {
    constructor(resource) {
        resource.get(GET_PROFILE_BY_FACULTY_ID, '/faculty/faculty-profile/:facultyId', (req, res) => {
            ExecuteChain(GET_PROFILE_BY_FACULTY_ID, {
                facultyId: req.params.facultyId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });
        resource.post(CREATE_FACULTY, 'faculty/create', (req, res) => {
            ExecuteChain(CREATE_FACULTY, {
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

        resource.put(UPDATE_FACULTY, 'faculty/update/:facultyId', (req, res) => {
            ExecuteChain(UPDATE_FACULTY, {
                facultyId: req.params.facultyId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        });

        resource.delete(DELETE_FACULTY, 'faculty/delete/:facultyId', (req, res) => {
            ExecuteChain(DELETE_FACULTY, {
                facultyId: req.params.facultyId
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        });

        resource.get(GET_FACULTIES, 'faculty/get-faculties', (req, res) => {
            ExecuteChain(GET_FACULTIES, {
                query: req.query
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        });

        resource.get(VALIDATE_FACULTY_ID, 'validate-faculty-id/:facultyId', (req, res) => {
            ExecuteChain(VALIDATE_FACULTY_ID, {
                facultyId: req.params.facultyId
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        })
    }
}