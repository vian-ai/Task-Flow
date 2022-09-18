import mongoose from 'mongoose';

const Connection = () => {
    const uri = process.env.MONGO_URI;

    mongoose.connect(uri, {
        useNewUrlParser: true
    });
    
    mongoose.connection.on('connected', () => {
        console.log('Successfully connected to database.');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Disconnected from database.');
    });

    mongoose.connection.on('error', () => {
        console.error(`An error occured trying to connect to the database: ${error.message}`);
    });
};

export default Connection;