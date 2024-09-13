const users = require('../users.json');

function getUsers(req,res){
    try{
        res.json(users);
    }
    catch(err){
        console.log(err);
    }
}
function getparticularUser(req,res){
    try{
        const user = users.find(user => user.id === parseInt(req.params.id));
        res.json(user);
    }
    catch(err){
        console.log(err);
    }
}
module.exports ={
    getUsers,
    getparticularUser
}