const { ObjectId } = require('mongoose').Types;
const { User, Thoughts } = require('../models');

module.exports = {
    //get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //get a single user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId }).select('-__v');
        if (!user) {
            return res.status(404).json({message: 'No user with that ID'})
        }
            res.json(user);
        /*res.json({
            user,
            thought: await thought(req.params.userId),
        })*/
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //create a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    //todo update a user

    //delete a user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
        if (!user) {
            res.status(404).json({ message: 'No user with that ID'});
        }
        res.json({ message: 'User was deleted' });
        //findOneAndRemove above? to include the thoughts
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
// const mongoose = require('mongoose');
// const User = require('../models');

// module.exports = {
//     //get all users
//     async getUsers(req, res) {
//         try {
//             const users = await User.find();
//             res.json(users);
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     },
//     //get a single user
//     async getSingleUser(req, res) {
//         try {
//             const user = await User.findOne({ _id: req.params.userId }).select('-__v');
//         if (!user) {
//             return res.status(404).json({message: 'No user with that ID'})
//         }
//             res.json(user);
//         /*res.json({
//             user,
//             thought: await thought(req.params.userId),
//         })*/
//         } catch (err) {
//             console.log(err);
//             return res.status(500).json(err);
//         }
//     },
//     //create a user
//     async createUser(req, res) {
//         try {
//             const user = await User.create(req.body);
//             res.json(user);
//         } catch (err) {
//             console.log(err);
//             return res.status(500).json(err);
//         }
//     },
//     //todo update a user

//     //delete a user
//     async deleteUser(req, res) {
//         try {
//             const user = await User.findOneAndDelete({ _id: req.params.userId });
//         if (!user) {
//             res.status(404).json({ message: 'No user with that ID'});
//         }
//         res.json({ message: 'User was deleted' });
//         //findOneAndRemove above? to include the thoughts
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     },
// };