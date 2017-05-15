import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import uniqueValidator from 'mongoose-unique-validator';

const studentProfileSchema = mongoose.Schema({
    studentId: {
        type: String,
        required: [true, 'Student Id is required.'],
        unique: [true, 'Student ID already exists']
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
    level: String,
    createdOn: {type: Date, default: Date.now},
    imageId: String
});

studentProfileSchema.plugin(mongoosePaginate);
studentProfileSchema.plugin(uniqueValidator);

const Student = mongoose.model('StudentProfile', studentProfileSchema);
export default Student;