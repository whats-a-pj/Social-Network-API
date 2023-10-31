// const connection = require('../config/connection.js');
// const { User, Thought } = require('../models');

// connection.on('error', (err) => err);

// //delete if collections exist
// connection.once('open', async () => {
//     console.log('connected');
//     let userCheck = await connection.db.listCollections({ name: 'users'}).toArray();
//     if (userCheck.length) {
//         await connection.dropCollection('users');
//     }
//     let thoughtCheck = await connection.db.listCollections({ name: 'thoughts'}).toArray();
//     if (thoughtCheck.length) {
//         await connection.dropCollection('thoughts');
//     }

// const users = [];

// await User.collection.insertMany(users);

// //await Thought.collection.insertMany()
// })