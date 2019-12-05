var express = require('express');
var router = express.Router();
const BlogModel = require('../models/blog.model')
const BlogController = require('../controllers/blog.controller')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/blogs', BlogController.getAllBlogs)
router.get('/blogs/:blog', BlogController.getBlogById)
router.put('/blogs/:blog', BlogController.updateBlogText)
router.delete('/blogs/:blog', BlogController.deleteBlog)

router.post('/blogs/new', BlogController.createNewBlog)


module.exports = router;
 