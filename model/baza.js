const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const artykulSchema = new Schema({
    tytul: String,
    tresc: String,
    zdjecie_artykulu: String
});
const artykul = mongoose.model("artykul", artykulSchema)

module.exports = artykul;