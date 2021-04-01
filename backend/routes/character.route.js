let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

// Character Model
let characterSchema = require('../models/Character');

// CREATE Character
router.route('/create-character').post((req, res, next) => {
  characterSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Character
router.route('/').get((req, res) => {
  characterSchema.find((error, data) => {
    if (error) {
      return next(error);
    }
    res.json(data);
  });
});

// Get Single Character
router.route('/edit-character/:id').get((req, res) => {
  characterSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Character
router.route('/update-character/:id').put((req, res, next) => {
  characterSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log('Character updated successfully !');
      }
    },
  );
});

// Delete Character
router.route('/delete-character/:id').delete((req, res, next) => {
  characterSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
