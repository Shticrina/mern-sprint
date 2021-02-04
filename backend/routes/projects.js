const express = require('express');
const router  = express.Router();

// Models
const Project = require("../models/Project");
const User = require("../models/User");

// Projects routes
router.route('/all').get((req, res) => {
	res.header("Content-Type",'application/json');

    Project.find()
    .then((result) => {
    	// console.log(res.json(result));
    	// return res.json(result);
        res.send(JSON.stringify(result, null, 4));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/find').get((req, res) => {
	res.header("Content-Type",'application/json');

	Project.findById("6012cab319e9ce9374440f0f", function(err, result) {
	    if (err) {
	      res.send(err);
	    } else {
	      res.send(JSON.stringify(result, null, 4));
	    }
	});
});

module.exports = router;