const User = require('../models/user');

//controller for many users

module.exports.profile = function(req, res){

    return res.render('user_profile',{
        title: "Profile Page"
    });
}

//renders the sign up or create accounts page
module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
       return res.redirect('/users/profile');
    }



    return res.render('user_sign_up', {
        title: "CODEIAL | Sign Up"
    });
}


//renders the login page for existing users
module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return   res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title: "CODEIAL | Log In"
    });
}


//for creating an account getting the signup data
module.exports.create = function(req, res){
    //check if password and confirm pwd are same
    console.log(res.cookie)
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    //if same then check the db model for already present userna,e
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding the user in signing up'); return;}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in finding the user in signing up'); return;}
                return res.redirect('/users/sign-in');
            });
        }else{
            return res.redirect('back');
        }

    });

}

//for logging in and creating a session
module.exports.createSession = function(req, res){
    return res.redirect('/');
}


module.exports.destroySession = function(req, res){
    req.logout();

    return res.redirect('/');
}