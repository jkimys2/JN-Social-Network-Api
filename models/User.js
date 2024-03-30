// Import files
const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "thought",
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "user",
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property "friendCount" that gets the length of the user's friends array field on query
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Initialize the User model
const User = model("user", userSchema);

// Export User model
module.exports = User;
