const mongoose = require('mongoose');
const validator = require('validator');
const ratingSchema = mongoose.Schema({
  hadithId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hadith',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
