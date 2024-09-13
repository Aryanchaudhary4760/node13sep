const  express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontrollers.js');

router.get('/users',(req,res)=>{
   userController.getUsers(req,res);
})
router.get('/users/:id',(req,res)=>{
    userController.getparticularUser(req,res);
})


module.exports = router;
