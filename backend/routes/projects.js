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

router.route('/create').post((req, res) => {
	res.header("Content-Type",'application/json');

	let title = req.body.title;
	let description = req.body.description;
	let newProject = new Project({title, description});

	newProject.save();
});

router.route('/update/:id').post((req, res) => {
	let project = new Project({
	    _id: req.params.id,
	    title: req.body.title,
	    description: req.body.description
  	});

  	Project.findOneAndUpdate({_id: id}, project)
	.then((result) => {
    	res.send(JSON.stringify(result, null, 4));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/delete/:id').delete((req, res) => {
	Project.findByIdAndDelete(req.params.id)
	.then((result) => {
    	res.send(JSON.stringify(result, null, 4));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;