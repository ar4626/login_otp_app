const {Router} = require('express');

const router = Router();

//importing all controller 
const controller = require('../controller/appController');



//POST Methods
router.route('/register').post(controller.register);  //register the user
router.route('/registerMail').post();  //send the mail
router.route('/authenticate').post();  //authenticate the user
router.route('/login').post(controller.login);  //login the user

//GET Methods
router.route('/user/:username').get(controller.getUser)  //user with username
router.route('/generateOTP').get(controller.generateOTP)  //generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP)  //verify generated OTP
router.route('/createResetSession').get(controller.createResetSession)  //reset all variables


//PUT Methods
router.route('/updateuser').put(controller.updateUser)
router.route('/resetPassword').put(controller.resetPassword)

module.exports = router;