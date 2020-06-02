//router for userscontroller
const express = require('express');

const router = express.Router();

const passport = require('passport');

//use the users controller to get required content
const usersController = require('../controllers/users_controller')


//route the router to get the function or action from controller filr
router.get('/profile', passport.checkAuthentication , usersController.profile);
//for posts section
// router.get('/posts', usersController.posts);
//for signin and signup pages
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

//for creating account for posting the info to server
router.post('/create', usersController.create);

//use passport as middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    { failureRedirect: '/users/sign-in'},
), usersController.createSession);


router.get('/sign-out', usersController.destroySession);

//export this router
module.exports = router;