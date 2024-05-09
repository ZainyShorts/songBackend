const mongoose = require("mongoose");

const songSchema = mongoose.Schema(
  {
    songName: {
      type: "String",
      required: true,
    },
    songFile: {
      type: String,
      required: true,
    },
    songTitle: {
      type: String,
      required: true,
    },
    songDesc: {
      type: String,
    },
  },
  { timestaps: true }
);



const User = mongoose.model("Song", songSchema);

module.exports = User;
