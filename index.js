const mongoose = require('mongoose')
require('dotenv').config()
const connect=require('./connection/connect')
const persons=require('./model/model')
const find = ()=>{
    //**** */ Use model.find()
    //  persons.find({name:'houssem'},(err,data)=>(err)?console.log('error',err):console.log(data)
    //  )
    
    //**** */  Use model.findOne()
    
    // persons.findOne({name:'houssem'},(err,data)=>(err)?console.log('error',err):console.log(data)
    //  )
    //**** */  Use model.findById()
    
    // persons.findById("613880de6146bea36a9e1a57",(err,data)=>(err)?console.log('error',err):console.log(data))
    
    //**** */ Using model.findOneAndUpdate()

    // persons.findOneAndUpdate({name:'Rania'}, {age:20},{new:true},(err,data)=>(err)?console.log('error',err):console.log(data))
    
    //****  Using model.findByIdAndRemove

    // persons.findByIdAndRemove("61387a417f5ed2d83ecf6ebb",(err,data)=>(err)?console.log('error',err):console.log(data))

    // *** model.remove()

    // persons.remove({name:'houssem'},(err,data)=>(err)?console.log('error',err):console.log(data))

    // Chain Search Query Helpers to Narrow Search Results

    persons.find({favoriteFood:'burritos'})
    .sort({name:1})
    .limit(2)
    .select({name:true})
    .exec()
    .then(docs => {
        console.log(docs)
      })
     .catch(err => {
        console.error(err)
      })
    }
find()
connect()