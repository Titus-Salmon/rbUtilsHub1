const express = require('express')
const router = express.Router()

//v//destructuring////////////////////////////////
const {
  v_InventoryMasterQuery
} = require('../backendLogic/tsqlHub/v_InventoryMasterQuery')


router.get('/', (req, res, next) => {
  res.json(req)
})

router.post('/', v_InventoryMasterQuery)

module.exports = router;