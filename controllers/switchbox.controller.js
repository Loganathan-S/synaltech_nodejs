const dbSynalTech             = require('./../models');
const {QueryTypes, Sequelize} = require("sequelize");
const switchBoxModel          = dbSynalTech.SwitchBoxs;
const _Sequelize              = dbSynalTech.sequelize;


exports.newSwitchBox = async (req, res) => {
    try {
        const _switchBox = await switchBoxModel.create({
                                                           zoneId       : req.body.zoneId
                                                           , sectionId  : req.body.sectionId
                                                           , locationId : req.body.locationId
                                                           , noOfLights : req.body.noOfLights
                                                           , noOfFans   : req.body.noOfFans
                                                           , noOfSockets: req.body.noOfSockets
                                                           , noOfUSBS   : req.body.noOfUSBS
                                                       });
        return res.json(_switchBox);
    } catch (e) {
        return res.status(400).json(null)
    }
}

exports.updateSwitchBox = async (req, res) => {
    try {
        const _switchBox = await switchBoxModel.findOne({where: {id: req.params?.id || -1}});
        if (_switchBox) {
            await _switchBox.update({
                                           zoneId       : req.body.zoneId
                                           , sectionId  : req.body.sectionId
                                           , locationId : req.body.locationId
                                           , noOfLights : req.body.noOfLights
                                           , noOfFans   : req.body.noOfFans
                                           , noOfSockets: req.body.noOfSockets
                                           , noOfUSBS   : req.body.noOfUSBS
                                       });
        }
        return res.json(_switchBox);
    } catch (e) {
        return res.status(400).json(null)
    }
}

exports.deleteSwitchBox = async (req, res) => {
    try {
        const _switchBox = await switchBoxModel.findOne({where: {id: req.params?.id || -1}});
        if (_switchBox) {
            await _switchBox.delete();
        }
        return res.json(_switchBox);
    } catch (e) {
        return res.status(400).json(null)
    }
}

exports.switchBoxList = async (req, res) => {
    try {
        console.log("test");
        const records = await _Sequelize.query(
            "SELECT " +
            "   * " +
            "FROM " +
            "   'switchbox' " +
            "   JOIN 'section'          ON 'section'.'id' = 'switchbox'.'sectionId'" +
            "   JOIN 'zone'             ON 'zone'.id = 'switchbox'.zoneId " +
            "   JOIN 'devicelocation'   ON 'devicelocation'.'id' = 'switchbox'.'locationId'"
            , {raw: true});
        return res.json(records);
    } catch (e) {
        console.log(e);
        return res.status(400).json(null)
    }
}

exports.switchBox                = async (req, res) => {
    try {
        const _switchBox = await switchBoxModel.findOne({where: {id: req.params?.id || -1}});
        return res.json(_switchBox);
    } catch (e) {
        return res.status(400).json(null)
    }
}
