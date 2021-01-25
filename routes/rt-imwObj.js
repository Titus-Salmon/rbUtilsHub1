const express = require('express')
const router = express.Router()

//v//destructuring////////////////////////////////

const {
  imwObj
} = require('../backendLogic/imwObj')




// router.get('/', function (req, res, next) {
//   // res.render('vw-imwObj', {
//   //   title: 'vw-imwObj'
//   // });
//   // console.log(`JSON.stringify(this)==> ${JSON.stringify(this)}`)
//   res.json()
// });

// router.post('/imwObj', imwObj)

router.get('/', imwObj)


module.exports = router;