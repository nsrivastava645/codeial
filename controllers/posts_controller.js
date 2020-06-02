const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create = function(req, res){
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function(err, post){
        if(err){console.log('Error in creating a post'); return;}

        return res.redirect('back');

    });

}

module.exports.destroy = function(req, res){
    Post.findById(req.params.id, function(err, post){
        //check the user is the one who posted this
        //.id means converting the object id into string 
        if(post.user == req.user.id){
            post.remove();
            //delete the comments associated with the post check where post: req.params.id
            Comment.deleteMany({post: req.params.id}, function(err){
                return res.redirect('back');
            });
        } else{
            return res.redirect('back');
        }

    });
}