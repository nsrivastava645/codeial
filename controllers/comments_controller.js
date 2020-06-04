const Comment = require('../models/comment');
const Post = require('../models/post')

module.exports.create = async function(req, res){

    try {
        let post = await Post.findById(req.body.post);
    
        if(post){
            let comment = await Comment.create({
                content: req.body.content,
                post: req.body.post, //as we sent the hidden data in form post is post-id
                user: req.user._id
            });
                
                //if the comment is created we will populate its parent post with its info
                post.comments.push(comment);
                post.save();//final version for mongodb and gets saved in db
                req.flash('success',`Comment Added by : ${req.user.name}`);
                return res.redirect('/');
            }
    } catch (err) {
        console.log('Error:', err);
        return;
    }

}

module.exports.destroy = async function(req, res){
    try {
        let comment = await Comment.findById(req.params.id);

        if(comment.user == req.user.id || post.user.id == req.user.id){
            //we delete a comment from comments but also from the posts array so store the comment id and delete it from the posts db
            let postId = comment.post;
            // let comment_user = comment.user;
            comment.remove();
            //find the post having this comment then update it with deleted comment array
            let post = Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}});//basically error function? wait look at the website
            //if u want to create a delete button u cn do that using ejs nd put condition in that yeah i want to know what condition i have to check
            req.flash('delete',`Comment Removed by: ${req.user.name}`);
            return res.redirect('back');
        } else{
            return res.redirect('back');
        }
    } catch (err) {
        console.log('Error:', err);
        return;
    }
}