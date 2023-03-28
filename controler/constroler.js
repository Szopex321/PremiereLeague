const auto = require("../model/baza")

const glowna = function (res, req) {
    res.render("glowa")
}
const highlist = function (res, req) {
    res.render("highlist")
}
const sklep = function (res, req) {
    res.render("sklep")
}
const tabele = function (res, req) {
    res.render("tabele")
}
const statystyki = function (res, req) {
    res.render("statystyki")
}
const ranking = function (res, req) {
    res.render("ranking")
}
const sponsorzy = function (res, req) {
    res.render("sponsorzy")
}
const autorzy = function (res, req) {
    res.render("autorzy")
}
const logowanie = function (res, req) {
    res.render("logowanie")
}
const rejestracja = function (res, req) {
    res.render("zarejestruj")
}
const autors = function (res, req) {
    res.render("autorzy")
}

module.exports = { glowna, highlist, sklep, tabele, statystyki, ranking, sponsorzy, autorzy, logowanie, rejestracja, autors }