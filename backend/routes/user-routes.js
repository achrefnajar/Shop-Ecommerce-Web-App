const express = require("express");


const router = express.Router();

const User = require("../models/user");

// import module multer
const multer = require('multer');

// import path module
const path = require('path');

// import bcrypt module
const bcrypt = require('bcrypt');
// import module JWt
const jwt = require("jsonwebtoken");



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

/// traitement sign up
router.post("/signup", multer({ storage: storage }).single('img'),
  (req, res) => {
    console.log("here into signup", req.body);
    bcrypt.hash(req.body.pwd, 10).then((cryptedpwd) => {
      const url = req.protocol + '://' + req.get('host');
      let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        Tel: req.body.Tel,
        pwd: cryptedpwd,
        role: req.body.role,
        statu: req.body.statu,
        avatar: url + "/images/" + req.file.filename
      });
      user.save((err, doc) => {
        if (err) {
          res.json({ message: "Email Exist" });

        } else {
          res.json({ message: "user added with success" })
        }
      });
    })

  });

//Traitemeent du request : login
// app.post("/users/login", (req, res) => {
//     console.log("here into login", req.body);
//     User.findOne({ email: req.body.email }).then((findedUser) => {
//       console.log("here finded User", findedUser);
//       if (!findedUser) {
//         res.json({ message: "0" })
//       }
//       return bcrypt.compare(req.body.pwd, findedUser.pwd);
//     })
//       .then((pwdResult) => {
//         console.log("here compare result", pwdResult);
//         if (!pwdResult) {
//           console.log("send response with incorrect PWD", pwdResult);
//           res.json({ message: "1" })
//         } else {
//           User.findOne({ email: req.body.email }).then((finalUser) => {
//             console.log("here final user", finalUser);
//             let user = {
//               fName: finalUser.firstName,
//               lName: finalUser.lastName,
//               role: finalUser.role,
//             };
//             res.json({ message: "2", user: user })
//           });
//         }
//       });
//   });
router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      return res.status(401).json({
        message: "Auth failed no such user"
      })
    }
    fetchedUser = user;
    return bcrypt.compare(req.body.pwd, user.pwd);
  }).then(result => {
    if (!result) {
      return res.status(401).json({
        message: "Auth failed inccorect password"
      })
    }
    const token = jwt.sign(
      {
        email: fetchedUser.email, userId: fetchedUser._id,
        userRole: fetchedUser.userRole
      },
      "secret_this_should_be_longer",
      { expiresIn: "1min" }
    );
    res.status(200).json({
      token: token,
      expiresIn: 300,
      userId: fetchedUser._id,
      userRole: fetchedUser.role
    });
    console.log('here role', fetchedUser.role);
  })
    .catch(e => {
      console.log(e)
    })
})
//Traitemeent du request :get All Users
router.get("/", (req, res) => {
    User.find().then((docs) => {
      res.json({ users: docs })
    })
  })
  //Traitemeent du request :get User By Id
  router.get("/:id", (req, res) => {
    User.findOne({ _id: req.params.id }).then((doc) => {
      res.json({ user: doc })
      console.log(doc);
    })
  });
  //Traitemeent du request : Delete User By Id
  router.delete("/:id", (req, res) => {
    User.deleteOne({ _id: req.params.id }).then((response) => {
      if (response.deletedCount == 1) {
        res.json({ message: "Deleted with success" });
      }
    })
  });
  // edit user status
  router.put("/:id", (req, res) => {
    User.updateOne({ _id: req.body._id }, req.body).then((response) => {
      console.log("response after update", response);
      if (response.nModified == 1) {
        res.json({ message: "here response after Edit" });
      }
    });
  
  });




module.exports = router;