const dbSynalTech  = require('./../models');
const {Op}         = require("sequelize");
const locationModel = dbSynalTech.DeviceLocations;


exports.newLocation = async (req, res) => {

    try {
        const _location = await locationModel.create({
                                                         location     : req.body.location
                                                });
        return res.json(_location);
    } catch (e) {
        return res.status(400).json(null)
    }
}

exports.locationList = async (req, res) => {
    try
    {
        const _locations = await locationModel.findAll();
        return res.json(_locations);
    } catch (e) {
        return res.status(400).json(null)
    }
}

exports.locationbyid = async (req, res) => {
    try
    {
        const _location = await locationModel.findOne({where: {id: req.params?.id || -1}});
        return res.json(_location);
    } catch (e) {
        return res.status(400).json(null)
    }
}
