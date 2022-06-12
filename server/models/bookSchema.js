const mongoose = require("mongoose");

const bookSchema =  mongoose.Schema({
    title:{type:String},
    author:{type:String},
    numOfPages:{type:Number},
    tags:{String},
    point:{type:Number,min:0,max:10},
    favor:{type:Boolean},
    abstract:{type:String},
    notes: {String},
    selectedFile:{type:String}
})

module.exports = mongoose.model("books", bookSchema)