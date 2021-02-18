const mongoose = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }
});

userSchema.plugin(toJson);
const User = mongoose.model('User', userSchema);

module.exports = User;