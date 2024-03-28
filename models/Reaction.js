// Import files
const { Schema, model } = require("mongoose");

// Create Reaction Schema
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default:
  },
});
