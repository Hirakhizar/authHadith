const validator = require('validator');
const Rating = require('../models/Rating');

// Add a new rating
exports.addRating = async (req, res) => {
  try {
    const { hadithId, rating, user } = req.body;
    
    const existingRating = await Rating.findOne({ hadithId, user });
    if (existingRating) {
      return res.status(400).json({ error: 'Rating already exists for this user and Hadith.' });
    }

    const newRating = new Rating({ hadithId, rating, user });
    await newRating.save();

    res.status(201).json(newRating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get average rating for a Hadith
exports.getAverageRating = async (req, res) => {
  try {
    const hadithId = req.params.hadithId;
    const ratings = await Rating.find({ hadithId });
    if (ratings.length === 0) {
      return res.json({ averageRating: 0 });
    }

    const totalRating = ratings.reduce((acc, curr) => acc + curr.rating, 0);
    const averageRating = totalRating / ratings.length;
    res.json({ averageRating });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
