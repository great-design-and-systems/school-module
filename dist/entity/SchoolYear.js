'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SchoolYearSchema = _mongoose2.default.Schema({
    description: {
        type: String,
        required: [true, 'School Year Description is required.']
    },
    dateStart: {
        type: Date,
        required: [true, 'School year date start is required.']
    },
    dateEnd: {
        type: Date,
        required: [true, 'School year date end is required.']
    },
    schoolId: String,
    createdBy: {
        type: String,
        required: [true, 'Created By is required.']
    },
    createdOn: { type: Date, default: Date.now },
    updatedBy: {
        type: String,
        required: [true, 'Updated By is required.']
    },
    updatedOn: { type: Date, default: Date.now }
});

var SchoolYear = _mongoose2.default.model('schoolYear', SchoolYearSchema);
exports.default = SchoolYear;