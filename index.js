const express = require('express');
const app = express();
const port = 8000;

//any app will use the routes index file then index of routes filewill use middleware to route to its neighbours using router.use method

//use the express router 
app.use('/', require('./routes'));//by default fetches routes/index

//setting the view engine
app.set('view-engine', 'ejs');

//set views directory
app.set('views','./views');

//add listener on this port 
app.listen(port,/*callback*/function(err){
    if(err){
        //using interpolation notation this button `~
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
}); 
 