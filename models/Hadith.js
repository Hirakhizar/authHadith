const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const hadithSchema=new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Add title '],
      },
      hadith: {
        type: String,
        required: [true, 'Add context of Hadith'],
      },
      translation: {
        type: String,
        required: [true, 'Add translation of Hadith '],
      },
      narrators: {
        type: String,
        required: [true, 'Add chain of Narrators'],
      },
      source: {
        type: String,
        required: [true, 'Add Source of Hadith'],
      },
      
      category: {
        type: String,
        required: [true, 'Add category of Hadith'],
      },
  
    
});
const Hadith=mongoose.model("hadiths",hadithSchema);



module.exports = Hadith;