import mongoose from 'mongoose';

const EducationLevelSchema = mongoose.Schema({
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

const EducationLevel = mongoose.model('educationLevel', EducationLevelSchema);
export default EducationLevel;