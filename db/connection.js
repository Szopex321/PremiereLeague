const mongoose = require("mongoose")
const connectDB = () => {
    return mongoose.connect("mongodb://127.0.0.1/kalkulator_samochodowy")
        .then(() => console.log("polaczono z baza"))
        .catch(() => console.log("brak polaczenia z baza"))
}
module.exports = connectDB