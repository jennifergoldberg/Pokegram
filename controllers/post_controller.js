const express = require("express");
const router = express.Router();

const Post = require("../models");

// index route
router.get('/', async (req, res, next) => {
    try{

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// new route - presentational
router.get('/new', async (req, res) => {
    try{

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// new route - functional
router.post

// show route - presentational
router.get("/:id", (req, res, next) => {
    try {

    } catch (error) {
        console.log(error);
        req.error= error;
        return next();  
    }
})