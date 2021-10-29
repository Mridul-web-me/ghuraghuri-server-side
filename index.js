const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
require('dotenv').config()


const port = process.env.PORT || 8080;




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kki34.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        await client.connect();
        console.log('Database Connected');
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('khatam tata bye bye')
})

app.listen(port, () => {
    console.log(`Example app listening at localhost:${port}`);
})