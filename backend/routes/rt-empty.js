const express = require('express')
const router = express.Router()

//v//destructuring////////////////////////////////

const {
  empty
} = require('../backendLogic/empty')




router.get('/', function (req, res, next) {
  // res.render('vw-empty', {
  //   title: 'vw-empty'
  // });
  console.log(`JSON.stringify(this)==> ${JSON.stringify(this)}`)
});

// router.post('/empty', empty)


module.exports = router;