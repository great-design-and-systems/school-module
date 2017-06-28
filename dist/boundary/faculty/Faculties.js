'use strict';

var _Chain = require('./Chain.info');

var _fluidChains = require('fluid-chains');

var _CreateFacultyProfile = require('../../control/faculty/CreateFacultyProfile');

var _CreateFacultyProfile2 = _interopRequireDefault(_CreateFacultyProfile);

var _DeleteFacultyProfileByFacultyId = require('../../control/faculty/DeleteFacultyProfileByFacultyId');

var _DeleteFacultyProfileByFacultyId2 = _interopRequireDefault(_DeleteFacultyProfileByFacultyId);

var _gdsStack = require('gds-stack');

var _GetFaculties = require('../../control/faculty/GetFaculties');

var _GetFaculties2 = _interopRequireDefault(_GetFaculties);

var _GetFacultyProfileByFacultyId = require('../../control/faculty/GetFacultyProfileByFacultyId');

var _GetFacultyProfileByFacultyId2 = _interopRequireDefault(_GetFacultyProfileByFacultyId);

var _UpdateFacultyProfile = require('../../control/faculty/UpdateFacultyProfile');

var _UpdateFacultyProfile2 = _interopRequireDefault(_UpdateFacultyProfile);

var _ValidateFacultyId = require('../../control/faculty/ValidateFacultyId');

var _ValidateFacultyId2 = _interopRequireDefault(_ValidateFacultyId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getProfileByFacultyIdChain = new _fluidChains.Chain(_Chain.GET_PROFILE_BY_FACULTY_ID, function (context, param, next) {
    new _GetFacultyProfileByFacultyId2.default(param.facultyId(), function (err, faculty) {
        if (err) {
            context.set('status', 500);
            context.set('dto', new _gdsStack.GDSDomainDTO('ERROR_' + _Chain.GET_PROFILE_BY_FACULTY_ID, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new _gdsStack.GDSDomainDTO(_Chain.GET_PROFILE_BY_FACULTY_ID, faculty));
            next();
        }
    });
});

getProfileByFacultyIdChain.addSpec('facultyId', true);

var createFacultyChain = new _fluidChains.Chain(_Chain.CREATE_FACULTY, function (context, param, next) {
    new _CreateFacultyProfile2.default({
        facultyId: param.facultyId(),
        firstName: param.firstName(),
        middleName: param.middleName ? param.middleName() : undefined,
        lastName: param.lastName(),
        gender: param.gender ? param.gender() : undefined,
        contactNo: param.contactNo ? param.contactNo() : undefined,
        emailAddress: param.emailAddress(),
        department: param.department(),
        imageId: param.imageId ? param.imageId() : undefined
    }, function (err, faculty) {
        if (err) {
            context.set('status', 500);
            context.set('dto', new _gdsStack.GDSDomainDTO('ERROR_' + _Chain.CREATE_FACULTY, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new _gdsStack.GDSDomainDTO(_Chain.CREATE_FACULTY, {
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
createFacultyChain.addSpec('emailAddress', true, function (done) {
    // validate email here  done(value:Boolean, message:String)
});
createFacultyChain.addSpec('department', true);
createFacultyChain.addSpec('imageId', false);

var updateFacultyChain = new _fluidChains.Chain(_Chain.UPDATE_FACULTY, function (context, param, next) {
    new _UpdateFacultyProfile2.default(param.facultyId(), param.inputData(), function (err, faculty) {
        if (err) {
            context.set('status', 500);
            context.set('dto', new _gdsStack.GDSDomainDTO('ERROR_' + _Chain.UPDATE_FACULTY, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new _gdsStack.GDSDomainDTO(_Chain.UPDATE_FACULTY, faculty));
            next();
        }
    });
});

updateFacultyChain.addSpec('inputData', true);
updateFacultyChain.addSpec('facultyId', true);

var deleteFacultyChain = new _fluidChains.Chain(_Chain.DELETE_FACULTY, function (context, param, next) {
    new _DeleteFacultyProfileByFacultyId2.default(param.facultyId(), function (err) {
        if (err) {
            context.set('status', 500);
            context.set('dto', new _gdsStack.GDSDomainDTO('ERROR_' + _Chain.DELETE_FACULTY, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new _gdsStack.GDSDomainDTO(_Chain.DELETE_FACULTY, 'Faculty has been removed.'));
            next();
        }
    });
});
deleteFacultyChain.addSpec('faculty', true);

var getFacultiesChain = new _fluidChains.Chain(_Chain.GET_FACULTIES, function (context, param, next) {
    var query = param.query ? param.query() : {};
    getFaculties(query, function (err, faculties) {
        if (err) {
            context.set('status', 500);
            context.set('dto', new _gdsStack.GDSDomainDTO('ERROR_' + _Chain.GET_FACULTIES, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new _gdsStack.GDSDomainDTO(_Chain.GET_FACULTIES, faculties));
            next();
        }
    });
});
getFacultiesChain.addSpec('query', false);

var validateFacultyIdChain = new _fluidChains.Chain(_Chain.VALIDATE_FACULTY_ID, function (context, param, next) {
    new _ValidateFacultyId2.default(param.facultyId(), function (err, result) {
        if (err) {
            context.set('status', 500);
            context.set('dto', new _gdsStack.GDSDomainDTO('ERROR_' + _Chain.VALIDATE_FACULTY_ID, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new _gdsStack.GDSDomainDTO(_Chain.VALIDATE_FACULTY_ID, result));
            next();
        }
    });
});
validateFacultyIdChain.addSpec('facultyId', true);