const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }

    const { MongoClient } = require('mongodb');
    const uri =
        'mongodb+srv://ryan123:z4nfbSwi9S.Tf^C@contactkeeper.2n4ii.mongodb.net/ContactKeeper?retryWrites=true&w=majority';
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    client.connect((err) => {
        const collection = client.db('test').collection('devices');
        // perform actions on the collection object
        client.close();
    });
};

module.exports = connectDB;
