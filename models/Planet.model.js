const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    
}, { timestamps: true });



module.exports = mongoose.model('Planet', planetSchema);