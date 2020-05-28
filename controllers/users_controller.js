//controller for many users

module.exports.profile = function(req, res){
    // return res.end('<h1>User Profile</h1>');
    return res.render('user_profile',{
        title: "Profile Page"
    });
}

//renders the sign up or create accounts page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up', {
        title: "CODEIAL | Sign Up"
    });
}


//renders the login page for existing users
module.exports.signIn = function(req,res){
    return res.render('user_sign_in', {
        title: "CODEIAL | Log In"
    });
}


//for creating an account getting the signup data
module.exports.create = function(req, res){
    //TODO later
}

//for logging in and creating a session
module.exports.createSession = function(req, res){
    //TODO later
}
