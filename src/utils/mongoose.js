import {connect, connection} from 'mongoose';

export async function connectDB() {
    const db = await connect('mongodb://localhost/nextmongocrud');
    console.log(db.connection.name);
   
}

connection.on('connected', () => {
    console.log('mongoose is connected');
})