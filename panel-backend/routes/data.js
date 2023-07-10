const express = require('express');
const fetchuser = require('../middleware/fetchUser');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()


const uri = process.env.DB_KEY;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const collection = client.db('AdminPanel').collection('Data');
  
    
 
 
  



//  Route1 : get all the data , Login Required
router.get('/events', async (req, res) => {
    let data =  await collection.find({}).limit(100).toArray((err, res)=>{});
    res.json(data);
     console.log("successfull");
  });

module.exports = router;
