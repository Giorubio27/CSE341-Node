const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();

async function main() {
    const uri = "mongodb+srv://giorubio27:Gm27punk@cluster0.vmazeaa.mongodb.net/?retry";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();


    console.log('Databases:');
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

const port = 3000

app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log('Web server is running at port' + (process.env.port || port));

