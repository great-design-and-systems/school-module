import mongoose from 'mongoose';

const SchoolYearSchema = mongoose.Schema({
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
    schoolId : String,
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

const SchoolYear = mongoose.model('schoolYear', SchoolYearSchema);
export default SchoolYear;