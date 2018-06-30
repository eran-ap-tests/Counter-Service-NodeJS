var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.send({count: global.counterSrv.getCounter()});  
});
router.post('/',function(req,res,next){
  global.counterSrv.incCount();
  res.send({message:'Counter incremented.'});
});


module.exports = router;

/*
Performing a GET request on the root URL returns the overall amount of post requests this server has gotten.
Performing a POST request on the root URL increments the count for overall POST requests by 1.
*/
