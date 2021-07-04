const express = require('express')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const app = express();
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/addBook',name:'Add Book'
    },
    {
        link:'/signin',name:'SignIn'
    },
    {
        link:'/register',name:'Register'
    }
];


const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorsRoutes')(nav);
const signinRouter = require('./src/routes/signinRoutes')(nav);
const registerRouter = require('./src/routes/registerRoutes')(nav);
const addBookRouter = require('./src/routes/addBookRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signin',signinRouter);
app.use('/register',registerRouter);
app.use('/addBook',addBookRouter);

app.get('/',function(req,res){
    res.render("index",{
        nav,
        title:'Library',
    })
})


app.listen(5000, () => {console.log("server started")});
