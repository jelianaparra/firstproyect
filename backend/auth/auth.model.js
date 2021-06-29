const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    direction: {
      type: String,
      required: true,
      trim: true,
      default: "Caracas",
    },
    age: {
      type: Number,
      required: true,
      trim: true,
      default: "22",
    },
    gender: {
      type: String,
      required: true,
      trim: true,
      default: "hombre",
    },
    coments: {
      type: String,
      trim: true,
      default: "una de las mejores peliculas que the visto, increible reparto",
    },
    movies: {
      type: Object,
      trim: true,
      default: "Inquebrantable",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userSchema);
