import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  end_year: {
    type: String,
    trim: true,
  },
  intensity: {
    type: Number,
    trim: true,
  },
  sector: {
    type: String,
  },
  topic: {
    type: String,
    trim: true,
  },
  insight: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    trim: true,
  },
  region: {
    type: String,
    trim: true,
  },
  start_year: {
    type: String,
    trim: true,
  },
  impact: {
    type: String,
    trim: true,
  },
  added: {
    type: String,
    trim: true,
  },
  published: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  relevance: {
    type: Number,
    trim: true,
  },
  pestle: {
    type: String,
    trim: true,
  },
  source: {
    type: String,
    trim: true,
  },
  title: {
    type: String,
    trim: true,
  },
  likelihood: {
    type: Number,
    trim: true,
  },
});

const Data = mongoose.model("data", dataSchema);

export default Data;
