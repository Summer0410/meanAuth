const express = require ('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')
mongoose.connect(config.database);
//tested developer branch

//on connection
mongoose.connection.on('connected',()=>{
  console.log('connected to database'+config.database);
})

//on error
mongoose.connection.on('error',(err)=>{
  console.log('database error:'+err);
})


const app = express();
const users  = require('./routes/users');
//port number
const port = 3000;
//cors middleware 
app.use(cors());
//Static file
app.use(express.static(path.join(__dirname,'public')));
//body-parser middleware
app.use(bodyParser.json());
app.use('/users',users);
//passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
//index router 
app.get("/", (req,res)=>{
  res.send ("invalid Endpoint");
});
//start server
app.listen(port,()=>{
    console.log('Server started on '+port);

})

