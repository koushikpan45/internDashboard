const express = require('express');
const app = express();
const InternRoute = express.Router();

// Intern model
let Intern = require('../models/Intern');

// Add Intern
InternRoute.route('/create').post((req, res, next) => {
  Intern.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Interns
InternRoute.route('/').get((req, res) => {
  Intern.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Intern
InternRoute.route('/read/:id').get((req, res) => {
  Intern.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Intern
InternRoute.route('/update/:id').put((req, res, next) => {
  Intern.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Intern
InternRoute.route('/delete/:id').delete((req, res, next) => {
  Intern.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = InternRoute;