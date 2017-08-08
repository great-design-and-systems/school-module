import mongoose from 'mongoose';

const LibrarySchema = mongoose.Schema({
    libraryName: {
        type: String,
        required: [true, 'Library Name is required.']
    },
    level: String,
    schoolId:  {
        type: String,
        required: [true, 'School Id is required.']
    },
});

const Library = mongoose.model('library', LibrarySchema);
export default Library;