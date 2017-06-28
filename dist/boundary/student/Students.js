'use strict';

var _Chain = require('./Chain.info');

var _fluidChains = require('fluid-chains');

var _CreateStudentProfile = require('../../control/student/CreateStudentProfile');

var _CreateStudentProfile2 = _interopRequireDefault(_CreateStudentProfile);

var _DeleteStudentProfileByStudentId = require('../../control/student/DeleteStudentProfileByStudentId');

var _DeleteStudentProfileByStudentId2 = _interopRequireDefault(_DeleteStudentProfileByStudentId);

var _gdsStack = require('gds-stack');

var _GetStudentProfileByStudentId = require('../../control/student/GetStudentProfileByStudentId');

var _GetStudentProfileByStudentId2 = _interopRequireDefault(_GetStudentProfileByStudentId);

var _GetStudents = require('../../control/student/GetStudents');

var _GetStudents2 = _interopRequireDefault(_GetStudents);

var _UpdateStudentProfile = require('../../control/student/UpdateStudentProfile');

var _UpdateStudentProfile2 = _interopRequireDefault(_UpdateStudentProfile);

var _ValidateStudentId = require('../../control/student/ValidateStudentId');

var _ValidateStudentId2 = _interopRequireDefault(_ValidateStudentId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getProfileByStudentIdChain = new _fluidChains.Chain(_Chain.GET_PROFILE_BY_STUDENT_ID, function (context, param, next) {
    new _GetStudentProfileByStudentId2.default(param.studentId(), function (err, student) {
        if (err) {
            context.set('status', 500);
            context.set('dto', new _gdsStack.GDSDomainDTO('ERROR_' + _Chain.GET_PROFILE_BY_STUDENT_ID, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new _gdsStack.GDSDomainDTO(_Chain.GET_PROFILE_BY_STUDENT_ID, student));
            next();
        }
    });
});
getProfileByStudentIdChain.addSpec('studentId', true);

var createStudentChain = new _fluidChains.Chain(_Chain.CREATE_STUDENT, function (context, param, next) {
    new _CreateStudentProfile2.default({
        studentId: param.studentId(),
        firstName: param.firstName(),
        middleName: param.middleName ? param.middleName() : undefined,
        lastName: param.lastName(),
        gender: param.gender ? param.gender() : undefined,
        contactNo: param.contactNo ? param.contactNo() : undefined,
        emailAddress: param.emailAddress(),
        department: param.department(),
        level: param.level(),
        imageId: param.imageId ? param.imageId() : undefined
    }, function (err, result) {
        if (err) {
            context.set('status', 500);
            context.set('dto', new _gdsStack.GDSDomainDTO('ERROR_' + _Chain.CREATE_STUDENT, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new _gdsStack.GDSDomainDTO(_Chain.CREATE_STUDENT, { id: result._id, studentId: result.studentId }));
            next();
        }
    });
});
createStudentChain.addSpec('studentId', true);
createStudentChain.addSpec('firstName', true);
createStudentChain.addSpec('middleName');
createStudentChain.addSpec('lastName', true);
createStudentChain.addSpec('gender');
createStudentChain.addSpec('contactNo');
createStudentChain.addSpec('emailAddress', true, function (done) {
    //TODO: validate email here done(value:Boolean, message:String)
});
createStudentChain.addSpec('department', true);
createStudentChain.addSpec('level', true);
createStudentChain.addSpec('imageId');

var updateStudentChain = new _fluidChains.Chain(_Chain.UPDATE_STUDENT, function (context, param, next) {
    new _UpdateStudentProfile2.default(param.studentId(), param.inputData(), function (err, result) {
        if (err) {
            context.set('status', 500);
            context.set('dto', new _gdsStack.GDSDomainDTO('ERROR_' + _Chain.UPDATE_STUDENT, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new _gdsStack.GDSDomainDTO(_Chain.UPDATE_STUDENT, result));
            next();
        }
    });
});
updateStudentChain.addSpec('inputData', true);
updateStudentChain.addSpec('facultyId', true);

var deleteStudentChain = new _fluidChains.Chain(_Chain.DELETE_STUDENT, function (context, param, next) {
    new _DeleteStudentProfileByStudentId2.default(param.studentId(), function (err) {
        if (err) {
            context.set('status', 500);
            context.set('dto', new _gdsStack.GDSDomainDTO('ERROR_' + _Chain.DELETE_STUDENT, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new _gdsStack.GDSDomainDTO(_Chain.DELETE_STUDENT, 'Student has been removed.'));
            next();
        }
    });
});

deleteStudentChain.addSpec('studentId', true);

var getStudentsChain = new _fluidChains.Chain(_Chain.GET_STUDENTS, function (context, param, next) {
    var query = param.query ? param.query() : {};
    getStudents(query, function (err, students) {
        if (err) {
            context.set('status', 500);
            context.set('dto', new _gdsStack.GDSDomainDTO('ERROR_' + _Chain.GET_STUDENTS, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new _gdsStack.GDSDomainDTO(_Chain.GET_STUDENTS, students));
            next();
        }
    });
});
getStudentsChain.addSpec('query');

var validateStudentIdChain = new _fluidChains.Chain(_Chain.VALIDATE_STUDENT_ID, function (context, param, next) {
    new _ValidateStudentId2.default(param.studentId(), function (err, result) {
        if (err) {
            context.set('status', 500);
            context.set('dto', new _gdsStack.GDSDomainDTO('ERROR_' + _Chain.VALIDATE_STUDENT_ID, err));
            next();
        } else {
            context.set('status', 200);
            context.set('dto', new _gdsStack.GDSDomainDTO(_Chain.VALIDATE_STUDENT_ID, result));
            next();
        }
    });
});
validateStudentIdChain.addSpec('studentId', true);