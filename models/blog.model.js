const BlogModel = require('../schemas/blog.schema')

BlogModel.createNewBlog = function(blogObject) {
     const newBlog = new BlogModel( {
      
        title: blogObject.blog.title,
        text : blogObject.blog.text,
        blogger: blogObject.blog.blogger,
    })

    return newBlog.save().then(result => {
        return result
    }).catch( err => {
       return err
    })
}

BlogModel.getAll = function() {
    return BlogModel.find({}).sort({title: 'desc'}).exec().then( (result => result)).catch( err => err)
}

BlogModel.getById = function(id) {
    return BlogModel.findById(id).exec()
                     .then( (result) => {
                         return result
                     })
                     .catch( err => {
                         return err
                     })
}

BlogModel.deleteBlog = function(id) {
    return BlogModel.findByIdAndDelete(id).exec()
                     .then( (result) => {
                         return result
                     })
                     .catch( err => {
                         return err
                     })
}

BlogModel.updateBlogText = function(id, obj) {
    return BlogModel.updateOne({_id: id}, {$set:{title: obj.title}}).exec()
                     .then( (result) => {
                         return result
                     })
                     .catch( err => {
                         return err
                     })
}

module.exports = BlogModel