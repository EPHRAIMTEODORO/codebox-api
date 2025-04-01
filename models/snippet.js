const mongoose = require('mongoose');

const SnippetSchema = new mongoose.Schema({
    title: {type:String, required: true},
    framework: {type:String, required: true},
    tags: [String],
    previewImage: String, //URL to image
    createdAt:{type: Date, default: Date.now}
});

module.exports = mongoose.model('Snippet', SnippetSchema);