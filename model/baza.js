const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const AutoSchema = new Schema({
    ilosc_kilometrow_do_przejechania: String,
    rok_otrzymania_prawa_jazdy: Number,
    Termin_wypozyczenia_samochodu: Date,
    cena_paliwa: Number,
    miasto_modelu_samochodu: String,
    spalanie_na_100: Number,
    ilosc_dostepnych_modeli: Number
});
const auto = mongoose.model("auto", AutoSchema)

module.exports = auto;