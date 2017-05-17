import mongoose from 'mongoose';

const SchoolProfileSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'School Name is required.']
    },
    address: String,
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

const SchoolProfile = mongoose.model('schoolProfile', SchoolProfileSchema);
export default SchoolProfile;