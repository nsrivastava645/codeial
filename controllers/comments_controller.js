const Comment = require('../models/comment');
const Post = require('../models/post')

module.exports.create = function(req, res){

    Post.findById(req.body.post, function(err, post){
        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post, //as wesent the hidden data in form post is post-id
                user: req.user._id
            }, function(err, comment){
                if(err){console.log('Error in posting comment'); return;}
                
                //if the comment is created we will populate its parent post with its info
                post.comments.push(comment);
                post.save();//final version for mongodb and gets saved in db
                return res.redirect('/');
            });
        }
    })




}