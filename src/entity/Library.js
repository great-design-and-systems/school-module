import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const LibrarySchema = mongoose.Schema({
    libraryName: {
        type: String,
        required: [true, 'Library Name is required.']
    },
    level: String,
    schoolId: {
        type: String,
        required: [true, 'School Id is required.']
    }
}, {
        timestamps: true
    });

LibrarySchema.plugin(mongoosePaginate);

const Library = mongoose.model('library', LibrarySchema);
export default Library;