const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    address:String,
    weightGain: {
        type: String,
        required: false 
    },
    weightLoss: {
        type: String,
        required: false
    },  
    attendence:Date
});


const User = mongoose.model('User', userSchema);


module.exports = User;