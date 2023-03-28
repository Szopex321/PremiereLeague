const express = require("express")
const router = express.Router();
const { glowna } = require("../controler/constroler")

router.route("/").get((req, res) => {
    res.render("glowna");
})
router.route("/highlist").get((req, res) => {
    res.render("highlist");
})
router.route("/sklep").get((req, res) => {
    res.render("sklep");
})
router.route("/tabele").get((req, res) => {
    res.render("tabele");
})
router.route("/statystyki").get((req, res) => {
    res.render("statystyki");
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
router.route("/autors").get((req, res) => {
    res.render("autorzy")
})
module.exports = router