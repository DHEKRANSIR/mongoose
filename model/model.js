const mongoose = require('mongoose')
const {Schema,model}= mongoose

// Create a person with this prototype:
const personSchema= new Schema({
    name:{type:"string",required:true},
    age:{type:"number"},
    favoriteFood:[String]
})
const persons= model('persons', personSchema);
// Create and Save a Record of a Model:

// const aylen= new persons({
//     name:'aylen', age:3, favoriteFood:['pizza', 'couscous','spaghetti']
// })
// aylen.save((err)=>err? console.log('error:',err):console.log('created with success'))

// Create Many Records with model.create()

// persons.create({name:'houssem', age:34, favoriteFood:[ 'couscous','spaghetti']},{name:'Rania', age:28, favoriteFood:[ 'Fish']},{name:'Mohamed',age:25, favoriteFood:[ 'evreythings']},
// ((err)=>err?console.log(err):console.log('creation succeded'))
// )
// Use model.find() to Search Your Database


module.exports=persons