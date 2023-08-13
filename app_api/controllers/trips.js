const mongoose = require('mongoose');
const model = mongoose.model('trips');

//GET: /trips - list all
const tripsList = async(req, res) => {
    model
        .find({})
        .exec((err, trips) => {
            if(!trips){
                console.log('no trips err');
                console.log(err);
                return res
                    .status(404)
                    .json({"message": "trip not found"});
            }
            else if (err){
                return res
                    .status(404)
                    .json(err);
            }
            else{
                return res
                    .status(200)
                    .json(trips);
            }
        })
};

//GET: /trips/:tripCode - returns one trip
const tripsFindCode = async(req, res) => {
    model
        .find({'code':req.params.tripCode})
        .exec((err,trip)=> {
            if(!trip){
                return res
                    .status(404)
                    .json({"message":"trip not found"});
            }
            else if(err) {
                return res
                    .status(404)
                    .json(err);
            }
            else {
                return res
                    .status(200)
                    .json(trip);
            }
        });
};

//POST
const tripsAddTrip = async(req, res) => {
    model
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
        (err, trip) => {
            if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            else {
                return res
                    .status(201)
                    .json(trip);
            }
        });
}

module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip
};