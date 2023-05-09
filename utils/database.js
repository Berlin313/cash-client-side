import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDb is already connected');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_LINK, {
            dbName: "cash",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;

        console.log('MongoDB connected successfuly')
    }catch (error){
        console.log(error);
    }
}