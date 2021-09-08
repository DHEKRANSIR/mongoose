const mongoose = require('mongoose')
require('dotenv').config()
const connect=()=>{
    mongoose.connect(process.env.mongourl)
    .then(()=>console.log('connected to database'))
    .catch((err)=>console.log(err))
}
module.exports=connect