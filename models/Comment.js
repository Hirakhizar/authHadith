const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const commentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    validate: [validator.isEmail, 'Please provide valid email'],
  },
  textArea: {
    type: String,
    required: [true, 'Please provide your comment'],
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
