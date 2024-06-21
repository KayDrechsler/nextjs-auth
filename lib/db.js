import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
    const client = await MongoClient.connect(
        'mongodb+srv://kaydrechsler:<password>@cluster0.pma8psh.mongodb.net/auth-demo?retryWrites=true&w=majority&appName=Cluster0'
    );

    return client;
};
