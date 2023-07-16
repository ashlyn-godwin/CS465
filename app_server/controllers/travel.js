const { isUtf8 } = require("buffer");
const fs = require("fs");
const trips = JSON.parse(fs.readFileSync("app_server/data/trips.json", "utf8")); // parse JSON, read to filesystem

const travel = (req, res) => {
    res.render('travel', {title: 'Travlr Getaways - Travel', trips});
};
module.exports = {
    travel
}