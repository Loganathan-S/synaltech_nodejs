const dbSynalTech = require('./../models');
const configureZoneModel   = dbSynalTech.ConfigureZone;


exports.newZoneName = async (req, res) => {
    try{
        const _zoneName = await configureZoneModel.create({
                                            userId : req.body.userId,
                                            zoneId: req.body.zoneId,

                                             });
        return res.json(_zoneName);
    }catch (e){
        return res.status(400).json(null);
    }
}
