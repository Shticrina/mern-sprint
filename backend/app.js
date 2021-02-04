const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const router = express.Router();


// Server configuration
const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Database configuration
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true }, () => {
	console.log("Connected to db yoo!");
	app.listen(port, () => console.log("Server Up and running on port " + port));
});

// Routes (import & use)
app.use('/api/projects', require('./routes/projects'));

// app.use('/users', require('./routes/auth'));