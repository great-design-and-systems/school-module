'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

var _mongooseUniqueValidator = require('mongoose-unique-validator');

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var facultyProfileSchema = _mongoose2.default.Schema({
    facultyId: {
        type: String,
        required: [true, 'Faculty Id is required.'],
        unique: [true, 'Faculty ID already exists']
    },
    firstName: {
        type: String,
        required: [true, 'firstname is required.']
    },
    middleName: String,
    lastName: {
        type: String,
        required: [true, 'lastname is required.']
    },
    gender: String,
    contactNo: String,
    emailAddress: String,
    department: String,
    createdOn: { type: Date, default: Date.now },
    imageId: String
});

facultyProfileSchema.plugin(_mongoosePaginate2.default);
facultyProfileSchema.plugin(_mongooseUniqueValidator2.default);

var Faculty = _mongoose2.default.model('FacultyProfile', facultyProfileSchema);
exports.default = Faculty;