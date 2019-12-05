
const BlogModel = require('../models/blog.model')

const BlogController = {}

  
  BlogController.createNewBlog  = (req, res, next) =>  {
    console.log(req.body)
    BlogModel.createNewBlog(req.body).then( result => {
        return res.json(result)
    }).catch( (err) => {
        return res.json(err)
    })
  }

  //Retrieve 
  BlogController.getAllBlogs = (req, res, next) => {
      return BlogModel.getAll().then( (result => {
          return BlogModel.find().then( (result) => {
              return res.json(result)
          })
      })).catch( (err) => {
          return res.json(er)
      })
  }

  BlogController.getBlogById = (req, res, next) => {
    const id = req.params.blog
    console.log(id)
    return BlogModel.getById(id).then( result =>  {
    
      res.json(result)
    }).catch( err => res.json(err))
  }


  BlogController.deleteBlog = (req, res, next) => {
    const id = req.params.blog
    return BlogModel.deleteBlog(id).then( result =>  {
    
      res.json(result)
    }).catch( err => res.json(err))
  }


  BlogController.updateBlogText = (req, res, next) => {
    const id = req.params.blog
    console.log(id)
    return BlogModel.updateBlogText(id, req.body).then( result =>  {
    
      res.json(result)
    }).catch( err => res.json(err))
  }
  
module.exports = BlogController
