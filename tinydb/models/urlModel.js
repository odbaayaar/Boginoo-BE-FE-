const { Schema, model, SchemaType } = require("mongoose");

const urlSchema = new Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  user: String,
  date: { type: String, default: Date.now }
})
const Url = model("Urls", urlSchema)

module.exports = Url