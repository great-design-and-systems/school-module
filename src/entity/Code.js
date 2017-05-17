import mongoose from 'mongoose';

const codeSchema = mongoose.Schema({
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

const Code = mongoose.model('code', codeSchema);
export default Code;