import mongoose from 'mongoose';

const ThemeSchema = mongoose.Schema({
    templateName: {
        type: String,
        required: [true, 'Template Name is required.']
    },
    logo: String,
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

const Theme = mongoose.model('theme', ThemeSchema);
export default Theme;