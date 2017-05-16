import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import uniqueValidator from 'mongoose-unique-validator';

const facultyProfileSchema = mongoose.Schema({
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
    createdOn: {type: Date, default: Date.now},
    imageId: String
});

facultyProfileSchema.plugin(mongoosePaginate);
facultyProfileSchema.plugin(uniqueValidator);

const Faculty = mongoose.model('FacultyProfile', FacultyProfileSchema);
export default Faculty;