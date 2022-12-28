
const mongoose= require('mongoose');

const connectDB =async()=>{
    try {
        const con = await mongoose.connect('mongodb+srv://venktesh:singh@cluster0.yiawe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
          useNewUrlParser:true,
          useUnifiedTopology:true,
          useFindAndModify:false,
          useCreateIndex:true  
        })
console.log(`MongoDDB connnected : ${con.connection.host}`);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

module.exports=connectDB