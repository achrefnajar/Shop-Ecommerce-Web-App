const express = require("express");


const router = express.Router();

const Order = require('../models/order');

const Annonce = require('../models/annonce');

//import ObjectID
const { ObjectId } = require("mongodb");

// traitment order post
router.post("/", (req, res) => {
    console.log("here req", req.body);
    Annonce.findOne({_id : req.body.annonceId}).then((doc)=>{
      if (doc.qty <= req.body.qty ) {
        let ann = {
          qty: doc.qty,
        };
        console.log(doc.qty);
        res.json ({message:"quantité insuffisante", annonce:ann})
      } else {
        let order = new Order({
  
          annonceId: ObjectId(req.body.annonceId),
          userId: ObjectId(req.body.userId),
          qty: req.body.qty,
          clientId:  ObjectId(req.body.clientId),
      
        }); 
        order.save((err, doc) => {
          if (err) {
      
            res.json({ message: "problem" })
          } else {
      
            res.json({ message: "add widh success" });
      
          }
      
        });
        Annonce.updateOne({ _id :  req.body.annonceId  }, { qty : doc.qty - req.body.qty }).then((response)=>{
          
        })
       
      }
    })
    
  
  });
  
  // traitement delete order
  router.delete("/:id", (req, res) => {
    Order.deleteOne({ _id: req.params.id }).then((response) => {
      if (response.deletedCount == 1) {
        res.json({ message: "Deleted with success" });
      }
    })
  });
  // get All Orders
  router.get("/", (req, res) => {
    Order.aggregate(
      [
        
        {
          $lookup: {
            from: "annonces", // collection to join
            localField: "annonceId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "annonce", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "clientId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "user", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "userId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "client", // output array field
          },
        },
      ],
      (error, docs) => {
        
        res.status(200).json({ comandes: docs});
        console.log(docs);
      } 
    )
  })
  
  // traitment order By client
  router.get("/:id", (req, res) => {
  
    Order.aggregate(
      [
        // { $match: { clientId: req.params.id } },
        { $match: { clientId: ObjectId(`${req.params.id}`) } },
        {
          $lookup: {
            from: "annonces", // collection to join
            localField: "annonceId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "annonce", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "userId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "user", // output array field
          },
        },
      ],
      (error, docs) => {
  
        res.status(200).json({ order: docs });
        console.log(docs);
      }
    )
  });
  // traitement order by user
  router.get("/api/:id", (req, res) => {
  
    Order.aggregate(
      [
        // { $match: { clientId: req.params.id } },
        { $match: { userId: ObjectId(`${req.params.id}`) } },
        {
          $lookup: {
            from: "annonces", // collection to join
            localField: "annonceId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "annonce", // output array field
          },
        },
        {
          $lookup: {
            from: "users", // collection to join
            localField: "clientId", //field from the input documents
            foreignField: "_id", //field from the documents of the "from" collection
            as: "user", // output array field
          },
        },
      ],
      (error, docs) => {
  
        res.status(200).json({ myorder: docs });
        console.log(docs);
      }
    )
  });
  // traitement get order by Id
  router.get("/user/:id", (req, res)=>{
    Order.aggregate([
      { $match: { _id : ObjectId(`${req.params.id}`) } },
      {
        $lookup: {
          from: "annonces", // collection to join
          localField: "annonceId", //field from the input documents
          foreignField: "_id", //field from the documents of the "from" collection
          as: "annonce", // output array field
        },
      },
      {
        $lookup: {
          from: "users", // collection to join
          localField: "clientId", //field from the input documents
          foreignField: "_id", //field from the documents of the "from" collection
          as: "user", // output array field
        },
      },

    ],
    (error, docs) => {
  
      res.status(200).json({ comande: docs });
      console.log(docs);
    }
  )
  });






module.exports = router;