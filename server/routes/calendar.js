const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('you made a GET request to /calendar')
})

module.exports = router;