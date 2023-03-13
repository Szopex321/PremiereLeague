const auto = require("../model/baza")

const glowna = function (res, req) { res.render("glowa") }
const naj_rozgrywki = function (res, req) { res.render("naj_rozgrywki") }
const zaklady = function (res, req) { res.render("zaklady") }
const tabele = function (res, req) { res.render("tabele") }
const statystyki = function (res, req) { res.render("statystyki") }
const ranking = function (res, req) { res.render("ranking") }
const sponsorzy = function (res, req) { res.render("sponsorzy") }
const autorzy = function (res, req) { res.render("autorzy") }
const logowanie = function (res, req) { res.render("logowanie") }

module.exports = { glowna, naj_rozgrywki, zaklady, tabele, statystyki, ranking, sponsorzy, autorzy, logowanie }