const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Jobpool', {useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
autoIndex: true,
})
.then(() => {
  console.log('connected to database'
  );
}).catch((e) => {
  console.log('connection failed!');
});
const Schema=mongoose.Schema;
var Newjobupload= new Schema({
    post: String,
    company: String,
    location: String,
    education:String,
    education:String,
    skills:String,
    experience: String,
    roles: String,
    employmenttype: String,
    salary:String
});
var Jobdata=mongoose.model('jobdata',Newjobupload);
module.exports=Jobdata;