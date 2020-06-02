const Post = require('../models/post');

module.exports.home = function(req, res){
    //nowwewill return a response using views folder files in it
    // return res.end('<h1>Express up for codeial</h1>');
    // Post.find({}, function(err, posts){
    //     return res.render('home', /*contents  called context you want to send from here*/{
        
    //         title: "CODEIAL | Home",
    //         posts : posts
    //     });
    // });
//populate userof each post
    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err, posts){
        return res.render('home', /*contents  called context you want to send from here*/{
        
            title: "CODEIAL | Home",
            posts : posts
        });
    });




}

