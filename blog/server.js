const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
// method override allows you to use delete and 
// others instead of just GET and POST
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, 
useUnifiedTopology: true, useCreateIndex: true })

// converts ejs code to html
app.set('view engine', 'ejs') 
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
   const articles = await Article.find().sort({ createdAt: 'desc' })
    // accesses views folder
    res.render('articles/index', { articles: articles })
})
app.use('/articles', articleRouter) 


app.listen(5000)