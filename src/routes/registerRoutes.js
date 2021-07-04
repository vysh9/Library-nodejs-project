const express = require('express');
const registerRouter = express.Router();
const { check, validationResult } = require('express-validator')

function router(nav){

    registerRouter.get('/',function(req,res){
        res.render("register",{
            nav,
            title:'Library',
        })
    });

   
   
    return registerRouter;


}

module.exports = router;