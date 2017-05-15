import { NotFound, CreateResponse } from '../../control/Response';

import Students from './Students';

export const API = '/api/student/';

export class StudentsResource {
    constructor(app) {
        const Student = new Students();
        app.get(API + 'student-profile/:studentId', (req, res) => {
            Student.getProfileByStudentId(req.params.studentId, (err, result) => {
                if (err) {
                    res.status(404).send(NotFound('Student profile'));
                } else {
                    res.status(200).send(result);
                }
            });
        });
        app.post(API + 'create', (req, res) => {
            Student.create(req.body, (err, result) => {
                CreateResponse(req, res, err, result);
            });
        });
        app.put(API + 'update/:id', (req, res) => {
            Student.update(req.params.id, req.body, (err, numberAffected, response) => {
                if (err) {
                    res.status(500).send(response);
                } else {
                    console.log(numberAffected);
                    res.status(200).send(numberAffected);
                }
            });
        });
        app.delete(API + 'delete/:studentId', (req, res) => {
            Student.removeStudent(req.params.studentId, (err, result) => {
                if (err) {
                    res.status(500).send({
                        message: 'Failed to remove student id ' + req.params.studentId + '.'
                    });
                } else {
                    res.status(200).send(result);
                }
            });
        });
        app.get(API + 'get-students', (req, res) => {
            Student.getStudents(req.query, (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(result);
                }
            });
        });
        app.get(API + 'validate-student-id/:studentId', (req, res) => {
            Student.validateStudentId(req.params.studentId, (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(result);
                }
            });
        });

    }
}