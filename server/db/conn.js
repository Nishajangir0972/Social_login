import mongoose from "mongoose";

const DB ='mongodb+srv://nishajangir9302:nisha0972@cluster0.inlqcvf.mongodb.net/LoginWithGoogle?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });