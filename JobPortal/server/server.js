const express= require('express');
const bodyParser= require('body-parser');
const cors=require('cors');

const app=express();

const PORT=3000;
app.use(bodyParser.json());
app.use(cors());
const Jobdata=require('./src/model/jobdata');
const Empdata=require('./src/model/empdata');
const Userdata=require('./src/model/Userdata');
const Facultydata=require('./src/model/Facultydata');
// app.use(cors({
//     origin:'*',
//     credentials:true
// }));
app.set('view engine','ejs');
// SCHEMA

app.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
// SCHEMA END
// app.use(function(req,res,next){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods:GET, POST,PATCH,PUT,DELETE");
//     // res.setHeader(‘Access-Control-Allow-Headers’, ‘X-Requested-With,content-type’);
// })
app.post('/register',function(req,res){


    
    console.log("helloooo");
  
     Userdata.create (  {
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        dob: req.body.dob,
        password: req.body.password,
        college: req.body.college,
        qualification: req.body.qualification,
        year: req.body.year,
        skill: req.body.skill,
        experience: req.body.experience
  
        
       },
       function(err,data){
           if(err)
           res.send(err);
          else
          res.json(data)
       })

  })
  app.get('/alumniDetails',function(req,res){
    console.log("inside user get")
    Userdata.find()
    .then(function(users){
        console.log(users);
        res.send(users);
    }); 

})
app.post('/registerfaculty',function(req,res){


    
    console.log("helloooo haii");
  
     Facultydata.create (  {
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        password: req.body.password,
        qualification: req.body.qualification,
        skill: req.body.skill,
        experience: req.body.experience
  
        
       },
       function(err,data){
           if(err)
           res.send(err);
          else
          res.json(data)
       })

  })
  app.get('/facultyDetails',function(req,res){
    console.log("inside faculty get")
    Facultydata.find()
    .then(function(facultys){
        console.log(facultys);
        res.send(facultys);
    }); 
})

//   app.post('/registeremp',function(req,res){
//     console.log("hello");
//     Empdata.create({
//         userName:req.body.userName,
//         companyName:req.body.companyName,
//         post:req.body.post,
//         password:req.body.password,
//         confirmPassword:req.body.confirmPassword,
//         email:req.body.email
//     },function(err,data){
//         if(err)
//         res.send(err);
//         else
//         res.json(data)
//     }
//     )
// })
app.get('/',function(req,res){
    res.send("hello from server")
});
app.get('/getjoblist',function(req,res){

    // console.log(Jobdata._id);
    
    
        Jobdata.find()
                    .then(function(jobs){
                        console.log(jobs);
                        res.send(jobs);
                    });
                    console.log(Jobdata._id);
    });

app.post('/upload',function(req,res){
    console.log("hello");
    Jobdata.create({
        post:req.body.post,
        company:req.body.company,
        location:req.body.location,
        education:req.body.education,
        skills:req.body.skills,
        experience:req.body.experience,
        roles:req.body.roles,
        employmenttype:req.body.employmenttype,
        salary:req.body.salary
    },function(err,data){
        if(err)
        res.send(err);
        else
        res.json(data)
    }
    )
})

// employee data
app.post('/registeremp',function(req,res){
    console.log("hello");
    Empdata.create({
        userName:req.body.userName,
        companyName:req.body.companyName,
        post:req.body.post,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        email:req.body.email
    },function(err,data){
        if(err)
        res.send(err);
        else
        res.json(data)
    }
    )
})
app.get('/empDetails',function(req,res){
    console.log("inside user get")
    Empdata.find()
    .then(function(users){
        console.log(users);
        res.send(users);
    }); 

})


app.delete('/removeJob/:id',(req,res)=>{
   
    id = req.params.id;
    console.log(id);
     Jobdata.deleteOne({_id: req.params.id})
    .then(()=>{
        console.log('success')
        res.send('successfully deleted book');
    })
  });


app.listen (PORT, function(){console.log("server running on localhost:"+PORT);
});