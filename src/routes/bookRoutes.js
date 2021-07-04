const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title:'The Dreamt Land',
            author:'Gregory Barber',
            genre:'science',
            img:"dreamt.jpg"
        },
        {
            title:'The Man Who Solved Market',
            author:'Daniel Oberhaus',
            genre:'buisness',
            img:"the man.jpg"
        },
        {
            title:'Alchol In Space',
            author:'Chris Carberry',
            genre:'science',
            img:"al.jpg"
        },
        {
            title:'Good To Go',
            author:'Christie Aschwanden',
            genre:'science',
            img:"good.jpg"
        }
    ]
    
    
    booksRouter.get('/',function(req,res){
        res.render("books",{
    
            nav,
            title:'Library',
            books
        })
    })
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
            nav,
            title:'Library',
            book: books[id]
        })
    })

    return booksRouter;

}

module.exports = router;