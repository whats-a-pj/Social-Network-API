const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
.route('./userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

module.exports = router;





/*************************************************************************/

// const { User } = require('../models'); // Import your models
// const express = require('express')
// const app = express();
// // GET all users
// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await User.find().populate('thoughts friends');
//     res.json(users);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// // GET a single user by its _id and populate thought and friend data
// app.get('/api/users/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).populate('thoughts friends');
//     res.json(user);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// // POST a new user
// app.post('/api/users', async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.json(user);
//   } catch (err) {
//     console.error(err);
//     res.status(400).json(err);
//   }
// });

// // PUT to update a user by its _id
// app.put('/api/users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(user);
//   } catch (err) {
//     console.error(err);
//     res.status(400).json(err);
//   }
// });

// // DELETE a user by its _id
// app.delete('/api/users/:id', async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.json({ message: 'User deleted' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

