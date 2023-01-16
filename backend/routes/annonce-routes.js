const express = require("express");


const router = express.Router();

const Annonce = require('../models/annonce');

const User = require("../models/user");

// import path module
const path = require('path');
// import module multer
const multer = require('multer');



//// configuration images path multer configuration
router.use('images', express.static(path.join('backend/images')));
// Mime Types only images
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
}
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }
});



// **********Annoonce***********
//Traitemeent du request : Get Annonce Table By User id 
router.get("/:id", (req, res) => {
    console.log("here into display Annonce Client", req.params.id);
    Annonce.find({ userId: req.params.id }).then((docs) => {
      console.log(docs);
      res.json({ annonces: docs });
    })
  });
  
  //Traitemeent du request : add Annonce
  router.post("/", multer({ storage: storage }).single('img'),
    (req, res) => {
      User.findOne({ _id: req.body.userId }).then(
        (result) => {
          console.log("user", result);
          if (result.statu == 'false') {
            res.json({ message: "not access" })
          } else {
            console.log("here into add annonce", req.body);
            const url = req.protocol + '://' + req.get('host');
            let annonce = new Annonce({
              description: req.body.description,
              price: req.body.price,
              qty: req.body.qty,
              userId: req.body.userId,
              date: req.body.date,
              category: req.body.category,
              avatar: url + "/images/" + req.file.filename
            });
            annonce.save((err, doc) => {
              if (err) {
                res.json({ message: "error" })
              } else {
                res.json({ message: "added with success" })
              }
            })
          }
        })
    });
  
  //Traitemeent du request : Get All Annonces
  router.get("/", (req, res) => {
    Annonce.find().then((docs) => {
      res.json({ annonces: docs });
    })
  })
  //Traitemeent du request : Get  Annonce By Id
  router.get("/api/:id", (req, res) => {
    console.log("here into display annonce", req.params.id);
    Annonce.findOne({ _id: req.params.id }).then((doc) => {
      res.json({ annonce: doc })
      console.log("here into display annonce", doc);
    })
  });
  //Traitemeent du request :  Delete  Annonce par Id
  router.delete("/:id", (req, res) => {
    Annonce.deleteOne({ _id: req.params.id }).then((response) => {
      if (response.deletedCount == 1) {
        res.json({ message: "Deleted with success" });
      }
    })
  });
  //Traitemeent du request :  edit Annonce par Id
  router.put("/:id", multer({ storage: storage }).single('img'), (req, res) => {
    Annonce.updateOne({ _id: req.body._id }, req.body).then((response) => {
      console.log("response after update", response);
      if (response.nModified == 1) {
        res.json({ message: "here response after Edit" });
      }
    });
  
  });

module.exports = router;