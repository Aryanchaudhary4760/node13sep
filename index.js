const express = require('express');
const app = express();
const user= require('./routes/users.js');

app.use(user);


app.listen(3000,(err)=>{
    if(err){
        console.log(err);

    }else{
          console.log('Server is running on port 3000');
    }
})