const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create = async function(req, res){
    try {
        await Post.create({
            content: req.body.content,
            user: req.user._id
        });
        
        req.flash('success','Post Published!');
        return res.redirect('back');

    } catch (err) {
        req.flash('error',err);
        return res.redirect('back');
    }

}

module.exports.destroy = async function(req, res){
   
    try {
        let post = await Post.findById(req.params.id);

    if(post.user == req.user.id){
        post.remove();
        //delete the comments associated with the post check where post: req.params.id
        await Comment.deleteMany({post: req.params.id});

        req.flash('success', "Post Deleted with all comments");

        return res.redirect('back');
    } else{
        req.flash('error', "Not authorized to delete the post");
        return res.redirect('back');
    }
    } catch (err) {
        req.flash('error',err);
        return res.redirect('back');
    }
    
}