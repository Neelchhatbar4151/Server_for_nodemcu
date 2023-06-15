const Mongoose = require('mongoose');

const UserScheme = new Mongoose.Schema({
      Celsius: {
            type: Number,
      },
      Fahrenheit: {
            type: Number,
      },
      Time: {
            type: Date,
            default:Date.now()
      }
})

const User = Mongoose.model("Temperatures", UserScheme);

const DB = "mongodb+srv://Fake:demopassword123@cluster0.owymoti.mongodb.net/?retryWrites=true&w=majority";

Mongoose.connect(DB,{
      useNewUrlParser : true,
      useUnifiedTopology:true,
}).then(()=>{
      console.log("connection successfull");
}).catch((err)=>{
      console.log(err);
})

module.exports = User;