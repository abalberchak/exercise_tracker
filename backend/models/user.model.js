const mongoose = require('mongoose');

const Schema = mongoose.schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlegth: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;