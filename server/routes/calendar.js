const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res){
    console.log(path.join(__dirname, '../../client/calendar.html'));
    res.sendFile(path.join(__dirname, '../../client/calendar.html'));
})

module.exports = router;