//******import express module *******//
const express = require('express');
// import body-parser module avec npm i body-parser
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopDB');
// import module multer
const multer = require('multer');
// import path module
const path = require('path');
// import bcrypt module
const bcrypt = require('bcrypt');
// import jwt module
const jwt = require("jsonwebtoken");



// import NodeMailer






//****** creation de l' application BE *******//
// create express application
const app = express();


//************* Configuration de l'application ***********//
// Configure BodyParser to send Response (JSON)
app.use(bodyParser.json())

// Configure APP by BodyParser to parse Object
app.use(bodyParser.urlencoded({ extended: true }));
// Security Configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

//// configuration images path multer configuration
app.use('/images', express.static(path.join('backend/images')));

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


// /// nodeMailer configurattion


// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     // host: "smtp.gmail.com",
//     // port: 587,
//     // secure: false, // true for 465, false for other ports
//     auth: {
//       user: '[achrefnajar1@gmail.com]', // generated ethereal user
//       pass: '[achref1233]', // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <achrefnajar1@gmail.com>', // sender address
//     to: "slim.nejmawii@gmail.com, ", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);
var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'achrefnajar1@gmail.com',
//     pass: 'puxtgpmbgqrtehge'
//   }
// });

// var mailOptions = {
//   from: 'achrefnajar1@gmail.com',
//   to: 'slim.nejmawii@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });


//******importation models  *******//
const User = require("./models/user");
const Annonce = require('./models/annonce');


const Order = require('./models/order');
//import ObjectID
const { ObjectId } = require("mongodb");






//****** Traitement logique des requests *******//

// import order routes
const orderRoutes = require("./routes/order-routes");

// import order routes
const userRoutes = require("./routes/user-routes");

//  import annonce routes 
const annonceRoutes = require("./routes/annonce-routes");

/// traitement sign up
// app.post("/users/signup", multer({ storage: storage }).single('img'),
//   (req, res) => {
//     console.log("here into signup", req.body);
//     bcrypt.hash(req.body.pwd, 10).then((cryptedpwd) => {
//       const url = req.protocol + '://' + req.get('host');
//       let user = new User({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         Tel: req.body.Tel,
//         pwd: cryptedpwd,
//         role: req.body.role,
//         statu: req.body.statu,
//         avatar: url + "/images/" + req.file.filename
//       });
//       user.save((err, doc) => {
//         if (err) {
//           res.json({ message: "Email Exist" });

//         } else {
//           res.json({ message: "user added with success" })
//         }
//       });
//     })

//   });

// //Traitemeent du request : login
// // app.post("/users/login", (req, res) => {
// //     console.log("here into login", req.body);
// //     User.findOne({ email: req.body.email }).then((findedUser) => {
// //       console.log("here finded User", findedUser);
// //       if (!findedUser) {
// //         res.json({ message: "0" })
// //       }
// //       return bcrypt.compare(req.body.pwd, findedUser.pwd);
// //     })
// //       .then((pwdResult) => {
// //         console.log("here compare result", pwdResult);
// //         if (!pwdResult) {
// //           console.log("send response with incorrect PWD", pwdResult);
// //           res.json({ message: "1" })
// //         } else {
// //           User.findOne({ email: req.body.email }).then((finalUser) => {
// //             console.log("here final user", finalUser);
// //             let user = {
// //               fName: finalUser.firstName,
// //               lName: finalUser.lastName,
// //               role: finalUser.role,
// //             };
// //             res.json({ message: "2", user: user })
// //           });
// //         }
// //       });
// //   });
// app.post("/users/login", (req, res, next) => {
//   let fetchedUser;
//   User.findOne({ email: req.body.email }).then(user => {
//     if (!user) {
//       return res.status(401).json({
//         message: "Auth failed no such user"
//       })
//     }
//     fetchedUser = user;
//     return bcrypt.compare(req.body.pwd, user.pwd);
//   }).then(result => {
//     if (!result) {
//       return res.status(401).json({
//         message: "Auth failed inccorect password"
//       })
//     }
//     const token = jwt.sign(
//       {
//         email: fetchedUser.email, userId: fetchedUser._id,
//         userRole: fetchedUser.userRole
//       },
//       "secret_this_should_be_longer",
//       { expiresIn: "1min" }
//     );
//     res.status(200).json({
//       token: token,
//       expiresIn: 300,
//       userId: fetchedUser._id,
//       userRole: fetchedUser.role
//     });
//     console.log('here role', fetchedUser.role);
//   })
//     .catch(e => {
//       console.log(e)
//     })
// })
// //Traitemeent du request :get All Users
// app.get("/users", (req, res) => {
//   User.find().then((docs) => {
//     res.json({ users: docs })
//   })
// })
// //Traitemeent du request :get User By Id
// app.get("/users/:id", (req, res) => {
//   User.findOne({ _id: req.params.id }).then((doc) => {
//     res.json({ user: doc })
//     console.log(doc);
//   })
// });
// //Traitemeent du request : Delete User By Id
// app.delete("/users/:id", (req, res) => {
//   User.deleteOne({ _id: req.params.id }).then((response) => {
//     if (response.deletedCount == 1) {
//       res.json({ message: "Deleted with success" });
//     }
//   })
// });
// // edit user status
// app.put("/users/:id", (req, res) => {
//   User.updateOne({ _id: req.body._id }, req.body).then((response) => {
//     console.log("response after update", response);
//     if (response.nModified == 1) {
//       res.json({ message: "here response after Edit" });
//     }
//   });

// });


// **********Annoonce***********
//Traitemeent du request : Get Annonce Table By User id 
// app.get("/annonces/:id", (req, res) => {
//   console.log("here into display Annonce Client", req.params.id);
//   Annonce.find({ userId: req.params.id }).then((docs) => {
//     console.log(docs);
//     res.json({ annonces: docs });
//   })
// });

//Traitemeent du request : add Annonce
// app.post("/annonces", multer({ storage: storage }).single('img'),
//   (req, res) => {
//     User.findOne({ _id: req.body.userId }).then(
//       (result) => {
//         console.log("user", result);
//         if (result.statu == 'false') {
//           res.json({ message: "not access" })
//         } else {
//           console.log("here into add annonce", req.body);
//           const url = req.protocol + '://' + req.get('host');
//           let annonce = new Annonce({
//             description: req.body.description,
//             price: req.body.price,
//             qty: req.body.qty,
//             userId: req.body.userId,
//             date: req.body.date,
//             category: req.body.category,
//             avatar: url + "/images/" + req.file.filename
//           });
//           annonce.save((err, doc) => {
//             if (err) {
//               res.json({ message: "error" })
//             } else {
//               res.json({ message: "added with success" })
//             }
//           })
//         }
//       })
//   });

// //Traitemeent du request : Get All Annonces
// app.get("/annonces", (req, res) => {
//   Annonce.find().then((docs) => {
//     res.json({ annonces: docs });
//   })
// })
// //Traitemeent du request : Get  Annonce By Id
// app.get("/annonces/api/:id", (req, res) => {
//   console.log("here into display annonce", req.params.id);
//   Annonce.findOne({ _id: req.params.id }).then((doc) => {
//     res.json({ annonce: doc })
//     console.log("here into display annonce", doc);
//   })
// });
// //Traitemeent du request :  Delete  Annonce par Id
// app.delete("/annonces/:id", (req, res) => {
//   Annonce.deleteOne({ _id: req.params.id }).then((response) => {
//     if (response.deletedCount == 1) {
//       res.json({ message: "Deleted with success" });
//     }
//   })
// });
// //Traitemeent du request :  edit Annonce par Id
// app.put("/annonces/:id", multer({ storage: storage }).single('img'), (req, res) => {
//   Annonce.updateOne({ _id: req.body._id }, req.body).then((response) => {
//     console.log("response after update", response);
//     if (response.nModified == 1) {
//       res.json({ message: "here response after Edit" });
//     }
//   });

// });


// **********ORDERS***********

// traitment order post
// app.post("/orders", (req, res) => {
//   console.log("here req", req.body);
//   Annonce.findOne({_id : req.body.annonceId}).then((doc)=>{
//     if (doc.qty <= req.body.qty ) {
//       let ann = {
//         qty: doc.qty,
//       };
//       console.log(doc.qty);
//       res.json ({message:"quantité insuffisante", annonce:ann})
//     } else {
//       let order = new Order({

//         annonceId: ObjectId(req.body.annonceId),
//         userId: ObjectId(req.body.userId),
//         qty: req.body.qty,
//         clientId:  ObjectId(req.body.clientId),
    
//       }); 
//       order.save((err, doc) => {
//         if (err) {
    
//           res.json({ message: "problem" })
//         } else {
    
//           res.json({ message: "add widh success" });
    
//         }
    
//       });
//       Annonce.updateOne({ _id :  req.body.annonceId  }, { qty : doc.qty - req.body.qty }).then((response)=>{
        
//       })
     
//     }
//   })
  

// });

// traitement delete order
// app.delete("/orders/:id", (req, res) => {
//   Order.deleteOne({ _id: req.params.id }).then((response) => {
//     if (response.deletedCount == 1) {
//       res.json({ message: "Deleted with success" });
//     }
//   })
// });
// get All Orders
// app.get("/orders", (req, res) => {
//   Order.aggregate(
//     [
      
//       {
//         $lookup: {
//           from: "annonces", // collection to join
//           localField: "annonceId", //field from the input documents
//           foreignField: "_id", //field from the documents of the "from" collection
//           as: "annonce", // output array field
//         },
//       },
//       {
//         $lookup: {
//           from: "users", // collection to join
//           localField: "clientId", //field from the input documents
//           foreignField: "_id", //field from the documents of the "from" collection
//           as: "user", // output array field
//         },
//       },
//     ],
//     (error, docs) => {
      
//       res.status(200).json({ comandes: docs});
//       console.log(docs);
//     } 
//   )
// })

// traitment order By client
// app.get("/orders/:id", (req, res) => {

//   Order.aggregate(
//     [
//       // { $match: { clientId: req.params.id } },
//       { $match: { clientId: ObjectId(`${req.params.id}`) } },
//       {
//         $lookup: {
//           from: "annonces", // collection to join
//           localField: "annonceId", //field from the input documents
//           foreignField: "_id", //field from the documents of the "from" collection
//           as: "annonce", // output array field
//         },
//       },
//       {
//         $lookup: {
//           from: "users", // collection to join
//           localField: "userId", //field from the input documents
//           foreignField: "_id", //field from the documents of the "from" collection
//           as: "user", // output array field
//         },
//       },
//     ],
//     (error, docs) => {

//       res.status(200).json({ order: docs });
//       console.log(docs);
//     }
//   )
// });
// traitement order by user
// app.get("/orders/api/:id", (req, res) => {

//   Order.aggregate(
//     [
//       // { $match: { clientId: req.params.id } },
//       { $match: { userId: ObjectId(`${req.params.id}`) } },
//       {
//         $lookup: {
//           from: "annonces", // collection to join
//           localField: "annonceId", //field from the input documents
//           foreignField: "_id", //field from the documents of the "from" collection
//           as: "annonce", // output array field
//         },
//       },
//       {
//         $lookup: {
//           from: "users", // collection to join
//           localField: "clientId", //field from the input documents
//           foreignField: "_id", //field from the documents of the "from" collection
//           as: "user", // output array field
//         },
//       },
//     ],
//     (error, docs) => {

//       res.status(200).json({ myorder: docs });
//       console.log(docs);
//     }
//   )
// })




app.use("/orders", orderRoutes);

app.use("/users", userRoutes);

app.use("/annonces", annonceRoutes);

// export app is importble from another files
module.exports = app;