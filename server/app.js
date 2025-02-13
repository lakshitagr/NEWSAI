import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.use(express.json())

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('Connection is successfull......');
})


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running ${process.env.PORT}......`);
  });


  //git log --all (show all version)
  //git checkout (shift particuler version)
  