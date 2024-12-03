const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://vaish:vaish@cluster0.2umavey.mongodb.net/studentsDb')
.then(()=>console.log('connected to db'))
.catch(err=> console.error('error didnt connect to db:', err));

const userSchema=new mongoose.Schema({
    username:{
        type:String, required:true
    },email:{
        type:String,required:true,unique:true
    },password:{
        type:String,required:true
    }
});
const chatSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    timestamp: { type:Date,default:Date.now}
  });

  const User=mongoose.model('User',userSchema);
  const Chat=mongoose.model('Chat',chatSchema);
  module.exports={User,Chat};

  //a model is a cls which gives u a way to interact with specific db collection