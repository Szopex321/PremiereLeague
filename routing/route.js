const express = require("express")
const router = express.Router();
const { glowna } = require("../controler/constroler")

router.route("/").get((req, res) => {
    res.render("glowna");
})
router.route("/naj_rozgrywki").get((req, res) => {
    res.render("naj_rozgrywki");
})
router.route("/zaklady").get((req, res) => {
    res.render("zaklady");
})
router.route("/tabele").get((req, res) => {
    res.render("tabele");
})
router.route("/statystyki").get((req, res) => {
    res.render("statystyki");
})
router.route("/ranking").get((req, res) => {
    res.render("ranking");
})
router.route("/sponsorzy").get((req, res) => {
    res.render("sponsorzy");
})
router.route("/autorzy").get((req, res) => {
    res.render("autorzy");
})
router.route("/logowanie").get((req, res) => {
    res.render("logowanie");
})
router.route("/rejestracja").get((req, res) => {
    res.render("zarejestruj")
})
module.exports = router