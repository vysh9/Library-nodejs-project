const express = require('express');
const authorsRouter = express.Router();
function route(nav){
    var authors = [
        {
            name: "R P N sing",
            bookname: "Politics of Opportunism",
            publishedyear:2019,
            img:"rpn.jpg"
        },
        {
            name: "Vasdev Mohi",
            bookname: "Cheque book",
            publishedyear:2018,
            img:"vasavi.jpg"
       },
       {
            name: "Viswanath Anand",
            bookname: "Mind master",
            publishedyear:2019,
            img:"master.jpg"
       },
       {
            name: "Vikram Sampath",
            bookname: "Savarkar",
            publishedyear:2019,
            img:"vikram.jpg"
       }
 ]
    
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
    
            nav,
            title:'Library',
            authors
        })
    })
    
    authorsRouter.get('/:id', function(req,res){
        const id = req.params.id
        res.render('author',{
            nav,
            title:'Library',
            author: authors[id]
        })
    })

    return authorsRouter;

}

module.exports = route;