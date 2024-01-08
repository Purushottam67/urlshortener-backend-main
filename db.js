import mongoose from 'mongoose';
import dotenv from 'dotenv';

//dot env config
dotenv.config();

const localURL = "localhost8000" ;
const mongoURL = 'mongodb+srv://pu_rush_78:pu__rush__78@cluster0.zesgfmf.mongodb.net/?retryWrites=true&w=majority'


export function dbConnect(){
    try{
        mongoose.connect(mongoURL);
        console.log('Data base connected');

    }catch(err){
        console.log(err);
    }
}

