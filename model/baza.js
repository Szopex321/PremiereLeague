const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const artykulSchema = new Schema({
    login: String,
    haslo: String,
});
const artykul = mongoose.model("artykul", artykulSchema)

module.exports = artykul;