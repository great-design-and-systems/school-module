import { CREATE_FACULTY, DELETE_FACULTY, GET_FACULTIES, GET_PROFILE_BY_FACULTY_ID, UPDATE_FACULTY, VALIDATE_FACULTY_ID } from './Chain.info';

import { Chain } from 'fluid-chains';
import CreateFacultyProfile from '../../control/faculty/CreateFacultyProfile';
import DeleteFacultyProfileByFacultyId from '../../control/faculty/DeleteFacultyProfileByFacultyId';
import { GDSDomainDTO } from 'gds-stack';
import GetFaculties from '../../control/faculty/GetFaculties';
import GetFacultyProfileByFacultyId from '../../control/faculty/GetFacultyProfileByFacultyId';
import UpdateFacultyProfile from '../../control/faculty/UpdateFacultyProfile';
import ValidateFacultyId from '../../control/faculty/ValidateFacultyId';

const getProfileByFacultyIdChain = new Chain(GET_PROFILE_BY_FACULTY_ID, (context, param, next) => {
    new GetFacultyProfileByFacultyId(param.facultyId(), (err, faculty) => {
        if (err) {
            context.set('status', 500);
            context.set('dto', new GDSDomainDTO('ERROR_' + GET_PROFILE_BY_FACULTY_ID, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new GDSDomainDTO(GET_PROFILE_BY_FACULTY_ID, faculty));
            next();
        }
    });
});

getProfileByFacultyIdChain.addSpec('facultyId', true);

const createFacultyChain = new Chain(CREATE_FACULTY, (context, param, next) => {
    new CreateFacultyProfile({
        facultyId: param.facultyId(),
        firstName: param.firstName(),
        middleName: param.middleName ? param.middleName() : undefined,
        lastName: param.lastName(),
        gender: param.gender ? param.gender() : undefined,
        contactNo: param.contactNo ? param.contactNo() : undefined,
        emailAddress: param.emailAddress(),
        department: param.department(),
        imageId: param.imageId ? param.imageId() : undefined
    }, (err, faculty) => {
        if (err) {
            context.set('status', 500);
            context.set('dto', new GDSDomainDTO('ERROR_' + CREATE_FACULTY, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new GDSDomainDTO(CREATE_FACULTY, {
                id: faculty._id,
                facultyId: faculty.facultyId
            }));
            next();
        }
    });
});
createFacultyChain.addSpec('facultyId', true);
createFacultyChain.addSpec('firstName', true);
createFacultyChain.addSpec('lastName', true);
createFacultyChain.addSpec('middleName', false);
createFacultyChain.addSpec('gender', false);
createFacultyChain.addSpec('contactNo', false);
createFacultyChain.addSpec('emailAddress', true, (done) => {
    // validate email here  done(value:Boolean, message:String)
});
createFacultyChain.addSpec('department', true);
createFacultyChain.addSpec('imageId', false);

const updateFacultyChain = new Chain(UPDATE_FACULTY, (context, param, next) => {
    new UpdateFacultyProfile(param.facultyId(), param.inputData(), (err, faculty) => {
        if (err) {
            context.set('status', 500);
            context.set('dto', new GDSDomainDTO('ERROR_' + UPDATE_FACULTY, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new GDSDomainDTO(UPDATE_FACULTY, faculty));
            next();
        }
    });
});

updateFacultyChain.addSpec('inputData', true);
updateFacultyChain.addSpec('facultyId', true);

const deleteFacultyChain = new Chain(DELETE_FACULTY, (context, param, next) => {
    new DeleteFacultyProfileByFacultyId(param.facultyId(), (err) => {
        if (err) {
            context.set('status', 500);
            context.set('dto', new GDSDomainDTO('ERROR_' + DELETE_FACULTY, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new GDSDomainDTO(DELETE_FACULTY, 'Faculty has been removed.'));
            next();
        }
    });
});
deleteFacultyChain.addSpec('faculty', true);

const getFacultiesChain = new Chain(GET_FACULTIES, (context, param, next) => {
    const query = param.query ? param.query() : {};
    getFaculties(query, (err, faculties) => {
        if (err) {
            context.set('status', 500);
            context.set('dto', new GDSDomainDTO('ERROR_' + GET_FACULTIES, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new GDSDomainDTO(GET_FACULTIES, faculties));
            next();
        }
    });
});
getFacultiesChain.addSpec('query', false);


const validateFacultyIdChain = new Chain(VALIDATE_FACULTY_ID, (context, param, next) => {
    new ValidateFacultyId(param.facultyId(), (err, result) => {
        if (err) {
            context.set('status', 500);
            context.set('dto', new GDSDomainDTO('ERROR_' + VALIDATE_FACULTY_ID, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new GDSDomainDTO(VALIDATE_FACULTY_ID, result));
            next();
        }
    });
});
validateFacultyIdChain.addSpec('facultyId', true);