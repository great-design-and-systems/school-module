import { CREATE_STUDENT, DELETE_STUDENT, GET_PROFILE_BY_STUDENT_ID, GET_STUDENTS, UPDATE_STUDENT, VALIDATE_STUDENT_ID } from './Chain.info';

import { ExecuteChain } from 'fluid-chains';

export default class StudentResource {
    constructor(resource) {
        resource.get(GET_PROFILE_BY_STUDENT_ID, '/student/student-profile/:studentId', (req, res) => {
            ExecuteChain(GET_PROFILE_BY_STUDENT_ID, {
                studentId: req.params.studentId
            }, result => {
                res.status(result.status()).send(result.dto());
            });
        });
        resource.post(CREATE_STUDENT, 'student/create', (req, res) => {
            ExecuteChain(CREATE_STUDENT, {
                studentId: req.body.studentId,
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

        resource.put(UPDATE_STUDENT, 'student/update/:studentId', (req, res) => {
            ExecuteChain(UPDATE_STUDENT, {
                studentId: req.params.studentId,
                inputData: req.body
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        });

        resource.delete(DELETE_STUDENT, 'student/delete/:studentId', (req, res) => {
            ExecuteChain(DELETE_STUDENT, {
                studentId: req.params.studentId
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        });

        resource.get(GET_STUDENTS, 'student/get-students', (req, res) => {
            ExecuteChain(GET_STUDENTS, {
                query: req.query
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        });

        resource.get(VALIDATE_STUDENT_ID, 'validate-student-id/:studentId', (req, res) => {
            ExecuteChain(VALIDATE_STUDENT_ID, {
                studentId: req.params.studentId
            }, result => {
                res.status(result.status()).send(result.dto());
            })
        })
    }
}