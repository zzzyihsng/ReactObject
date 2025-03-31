var express = require('express');
var router = express.Router();
const {userModel} = require("../model/model")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', async (req, res) => {
  const users = await userModel.find({})
  res.send(users)
})

module.exports = router;
