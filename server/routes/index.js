var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

router.get('/', function(req, res) {
    res.send({greeting: 'Hello React x Node.js'});
});

module.exports = router;