const mongoose = require('mongoose');
// const validator = require('validator');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please include the title"],
        trim: true,
        unique: true,
        minLength: 2,
        maxLength: 300
    },
    headline: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please include the description"],
        trim: true,
        minLength: 2,
        maxLength: 900
    },
    when: {
        type: String,
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    techno: {
        type: Array
    },
    fields: {
        type: Array
    },
    intervention: {
        type: Array
    },
    image: {
        type: String,
        maxLength: 190,
        default : '/images/default_project.jpg'
    },
    website: {
        type: String,
        trim: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);