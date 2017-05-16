import { GDSDomainDTO } from 'gds-config';

export const NotFound = (field) => {
    return new GDSDomainDTO('NOT_FOUND_ERROR', {
        message: field + ' not found'
    });
}

export const CreateStudentResponse = (req, res, err, result) => {
    if (err) {
        res.status(500).send(new GDSDomainDTO('STUDENT_CREATION_FAILED', err.message));
    } else {
        const dto = new GDSDomainDTO('STUDENT_CREATION_COMPLETED', {
            id: result._id,
            studentId: result.studentId
        });
        dto.addGet('getProfileByStudentId', 'http://' + req.headers.host + 'api/student/' + 'student-profile/' + result.studentId);
        res.status(200).send(dto);
    }
}

export const CreateFacultyResponse = (req, res, err, result) => {
    if (err) {
        res.status(500).send(new GDSDomainDTO('FACULTY_CREATION_FAILED', err.message));
    } else {
        const dto = new GDSDomainDTO('FACULTY_CREATION_COMPLETED', {
            id: result._id,
            facultyId: result.facultyId
        });
        dto.addGet('getProfileByFacultyId', 'http://' + req.headers.host + 'api/faculty/' + 'faculty-profile/' + result.facultyId);
        res.status(200).send(dto);
    }
}
