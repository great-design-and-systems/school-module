'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EducationLevelSchema = _mongoose2.default.Schema({
    name: {
        type: String,
        required: [true, 'Education Level name is required.']
    },
    description: String,
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

var EducationLevel = _mongoose2.default.model('educationLevel', EducationLevelSchema);
exports.default = EducationLevel;