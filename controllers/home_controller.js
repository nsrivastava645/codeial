module.exports.home = function(req, res){
    //nowwewill return a response using views folder files in it
    // return res.end('<h1>Express up for codeial</h1>');
    return res.render('home', /*contents  called context you want to send from here*/{
        title: "CODEIAL | Home"
    });
}

// //controller for contacts say
// module.exports.contacts = function(req, res){
//     return res.end('<h1>Reached contacts section</h1>');
// }