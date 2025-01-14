const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["completed", "in_progress", "pending"],
      required: true,
    },

    level: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
  },

  { timestamps: true }
)

module.exports = mongoose.model("Todo", TodoSchema);