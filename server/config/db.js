const mongoose = require("mongoose")


module.exports= ()=>{

mongoose.connect(process.env.CONNECTION_URL,{
    useUnifiedTopology:true,
    useNewUrlParser :true
})
mongoose.connection.on("open", ()=>{
console.log("Mongo DB Connected")
})
mongoose.connection.on("error",(err)=>{
    console.log(err)

})
}