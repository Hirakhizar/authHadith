const Comment = require("../models/Comment");
const express = require("express");
const cors = require("cors");

// Route for adding a new comment
exports.addComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.send(comment);
  } catch (error) {
    res.status(500).send("Error adding new comment: " + error.message);
  }
};

// Fetch all comments
exports.fetchComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    if (comments.length > 0) {
      res.send(comments);
    } else {
      res.send({ result: "No comments found." });
    }
  } catch (error) {
    res.status(500).send("Error fetching comments: " + error.message);
  }
};

// Route to delete a comment
exports.deleteComment = async (req, res) => {
  try {
    const result = await Comment.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.status(500).send("Error deleting comment: " + error.message);
  }
};

// Route to retrieve a single comment by ID (for prefilling a form)
exports.getComment = async (req, res) => {
  try {
    const result = await Comment.findOne({ _id: req.params.id });
    if (result) {
      res.send(result);
    } else {
      res.send({ result: "No record found." });
    }
  } catch (error) {
    res.status(500).send("Error retrieving comment: " + error.message);
  }
};

// Route to update a comment
exports.updateComment = async (req, res) => {
  try {
    const result = await Comment.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send("Error updating comment: " + error.message);
  }
};

// Search comments
exports.searchComments = async (req, res) => {
  try {
    const result = await Comment.find({
      $or: [
        { name: { $regex: req.params.key, $options: "i" } },
        { email: { $regex: req.params.key, $options: "i" } },
        { textArea: { $regex: req.params.key, $options: "i" } },
      ],
    });
    res.send(result);
  } catch (error) {
    res.status(500).send("Error searching comments: " + error.message);
  }
};
