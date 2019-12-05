const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = require('bluebird')

const BlogSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    text: String,
    blogger: String
   
}, {

    timestamps: true
}
)

const BlogModel = mongoose.model('Blog', BlogSchema)

module.exports = BlogModel