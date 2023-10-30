const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: mongoose.Types.ObjectId,
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toDateString()
  }
});

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toDateString()
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  });



const Thought = mongoose.model('Thought', thoughtSchema);
const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = { Thought, Reaction };