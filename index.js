const express = require('express');
const app = express();
const port = 8000;




//add listener on this port 
app.listen(port,/*callback*/function(err){
    if(err){
        //using interpolation notation this button `~
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});
 