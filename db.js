const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
//mongoose.connect('mongodb://testuser:testpass1@ds351428.mlab.com:51428/blog')
mongoose.connect('mongodb://localhost/blog')
        .then( () => {
            console.log('success')
        })
        .catch( (err) => {
            console.log(err)
        })