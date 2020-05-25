const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

//add layout to your index.js
app.use(expressLayouts);

//for css styling of each view file and scripts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//and add <%- style %> in the layout ejs file

//adding static files
app.use(express.static('./assets'));
//any app will use the routes index file then index of routes filewill use middleware to route to its neighbours using router.use method


//setting up views engine
//use the express router 
app.use('/', require('./routes'));//by default fetches routes/index

//setting the view engine
app.set('view engine', 'ejs');

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
 