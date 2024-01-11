const mongoose = require('mongoose');

const enquirySchema = mongoose.Schema({
    emailId: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Enquiries', enquirySchema);