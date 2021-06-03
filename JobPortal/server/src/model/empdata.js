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
var Newempdata= new Schema({
    userName: String,
    companyName: String,
    post: String,
    password:String,
    confirmPassword:String,
    email:String
   
});
var Empdata=mongoose.model('empdata',Newempdata);
module.exports=Empdata;