const {Op, where} = require('sequelize');
const dbSynalTech = require('./../models');
const deviceModel = dbSynalTech.Devices;

exports.newDevice = async (req, res) => {
    try {
        const _device = await deviceModel.create({
                                                     deviceId   : req.body.deviceId,
                                                     description: req.body.description
                                                 });
        return res.json(_device);
    } catch (e) {
        return res.status(400).json(null)
    }
}

exports.updateDevice = async (req, res) => {
    try {
        const _device = await deviceModel.findOne({where: {id: req.params?.id || -1}});
        if (_device) {
            await _device.update({
                                     zoneId    : req.body.zoneId,
                                     deviceName: req.body.deviceName,
                                     sectionId : req.body.sectionId,
                                     locationId : req.body.locationId
                                 });
        }
        return res.json(_device);
    } catch (e) {
        return res.status(400).json(null)
    }
}

exports.updateDeviceLines = async (req, res) => {
    try {
        const _device = await deviceModel.findOne({where: {id: req.params?.id || -1}});
        if (_device) {
            const objDevice = JSON.parse(_device.description);
            objDevice.lines = req.body.description.lines;

            await _device.update({
                                     description    :  JSON.stringify(objDevice)
                                 });
            // for (var i = 0; i < objDevice.lines.length;  i++){
            //     if (objDevice.lines[i]['id'] == "2") {
            //         _line = objDevice.lines[i];
            //         console.log(_line);
            //     }
            // }
        }
        return res.json(_device);
    } catch (e) {
        console.log(e);
        return res.status(400).json(null)
    }
}
exports.updateDeviceLineAction = async (req, res) => {
    try {
        const _device = await deviceModel.findOne({where: {id: req.params?.id || -1}});
        if (_device) {
            const objDevice = JSON.parse(_device.description);
            for (let i = 0; i < objDevice.lines.length;  i++){
                if (objDevice.lines[i]['id'] == req.body.id) {
                    objDevice.lines[i]['value'] = req.body.value;
                }
            }
            await _device.update({
                                     description    :  JSON.stringify(objDevice)
                                 });
        }
        return res.json(_device);
    } catch (e) {
        console.log(e);
        return res.status(400).json(null)
    }
}

exports.newDeviceList = async (req, res) => {
    try {
        const _devices = await deviceModel.findAll({where: {zoneId: {[Op.is]: null}}});
        return res.json(_devices);
    } catch (e) {
        return res.status(400).json(null)
    }
}

exports.deviceList = async (req, res) => {
    try {
        //const _devices = await deviceModel.findAll({where: {zoneId: {[Op.ne]: null}}});
        const _devices = await deviceModel.findAll();
        return res.json(_devices);
    } catch (e) {
        return res.status(400).json(null)
    }
}

exports.device= async (req, res) => {
    try {
        const _device = await deviceModel.findOne({where: {id: req.params?.id || -1}});
        return res.json(_device);
    } catch (e) {
        return res.status(400).json(null)
    }
}


exports.deviceAction = async (req, res) => {
    try {
        const client   = req.mqttClient;
        let topic_list = ["v1/devices/me/attributes", "v1/devices/me/rpc/request"];
        let message    = "{\"method\":\"setGpioStatus\",\"params\":{\"pin\":\"0\",\"enabled\":false}}";

        if (client.connected == true) {
            client.publish(topic_list, message, req.mqttOptions);
        }

        return res.json({status: 'ok'});
    } catch (e) {
        return res.status(400).json(null)
    }
}
