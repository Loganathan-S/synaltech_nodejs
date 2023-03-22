const dbSynalTech = require('./../models');
const zoneModel   = dbSynalTech.Zones;


exports.newZone = async (req, res) => {
    try{
        const _zone = await zoneModel.create({
                                                 zoneName     : req.body.zoneName
                                             });
        return res.json(_zone);
    }catch (e){
        return res.status(400).json(null);
    }
}

exports.updateZone = async (req, res) => {
    try {
        const _zone = await zoneModel.findOne({where: {id: req.params?.id || -1}});
        if (_zone) {
            await _zone.update({
                                     zoneName     : req.body.zoneName
                                 });
        }
        return res.json(_zone);
    } catch (e) {
        return res.status(400).json(null)
    }
}

exports.deleteZone = async (req, res) => {
    try {
        const _zone = await zoneModel.findOne({where: {id: req.params?.id || -1}});
        if (_zone) {
            await zoneModel.destroy({where: {id: req.params?.id || -1}});
        }
        return res.json({status: 'ok'});
    } catch (e) {
        console.log(e);
        return res.status(400).json(null)
    }
}

exports.zoneList = async (req, res) => {
    try{
        const _zones = await zoneModel.findAll();
        return res.json(_zones);
    }catch (e){
        return res.status(400).json(null);
    }
}

exports.zone = async (req, res) => {
    try{
        const _zones = await zoneModel.findOne({where: {id: req.params?.id || -1}});
        return res.json(_zones);
    }catch (e){
        return res.status(400).json(null);
    }
}
