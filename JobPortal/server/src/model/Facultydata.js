const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Jobpool');

//mongoose.connect('mongodb+srv://userone:userone@cluster0.akfoz.mongodb.net/libraryapp?retryWrites=true&w=majority');
//Schema
const Schema = mongoose.Schema;

const FacultySchema =  new Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    qualification: String,
    skill: String,
    experience: String
});

//Model
var Facultydata = mongoose.model('facultydata',FacultySchema);

module.exports = Facultydata;