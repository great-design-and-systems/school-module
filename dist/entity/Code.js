'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var codeSchema = _mongoose2.default.Schema({
    codeType: {
        type: String,
        required: [true, 'Code Type is required.']
    },
    codeName: {
        type: String,
        required: [true, 'Code Name is required.']
    },
    codeValue: {
        type: String,
        required: [true, 'Code Value is required.']
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

var Code = _mongoose2.default.model('code', codeSchema);
exports.default = Code;