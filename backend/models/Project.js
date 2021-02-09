const mongoose = require('mongoose');
// const validator = require('validator');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please include the title"],
        trim: true,
        unique: true,
        minLength: 2,
        maxLength: 160
    },
    description: {
        type: String,
        required: [true, "Please include the description"],
        trim: true,
        minLength: 2,
        maxLength: 900
    },
    image: {
        type: String,
        maxLength: 190,
        default : '/images/default_project.jpg'
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);