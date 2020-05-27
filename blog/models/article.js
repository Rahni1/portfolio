const mongoose = require('mongoose')
// marked allows you to convert markdown into html
const marked = require('marked')
// slugify allows you to convert something like title into url friendly slug
const slugify = require('slugify')
// dom purify sanitizes html so malicious code is removed
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)


const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sanitizedHtml: {
        type: String,
        required: true
    }
})

// run the function passed to pre every time before 
// I save, update, create or delete the article
articleSchema.pre('validate', function(next) {
if (this.title) {
    // strict: true removes any characters that don't go in the url
    this.slug = slugify(this.title, { lower: true, strict: true })
}
if (this.markdown) {
    // converts markdown to html and sanitizes it
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
}
next()
})

module.exports = mongoose.model('Article', articleSchema)