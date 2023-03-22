const dbSynalTech = require('./../models');
const userModel   = dbSynalTech.Users;

exports.initHome = async (req, res) => {

    const client   = req.mqttClient;
    let topic_list=["v1/devices/me/attributes","v1/devices/me/rpc/request","topic4"];
    let message="{\"method\":\"setGpioStatus\",\"params\":{\"pin\":\"0\",\"enabled\":false}}";
    let options    = {
        retain: true,
        qos   : 1
    };


    console.log("test connection-->" + client.connected);

    if (client.connected == true) {
        client.publish("v1/devices/88231/request", message, req.mqttOptions);
    }
    return res.json({status: 'ok'});
}

exports.newUser = async (req, res) => {
    try{
        const _user = await userModel.create({
                                                 email     : req.body.email
                                                 , password: req.body.password
                                                 , name    : req.body.name
                                             });
        return res.json(_user);
    }catch (e){
        return res.status(400).json(null)
    }
}

exports.userList = async (req, res) => {
    try{
        const _user = await userModel.findAll();
        return res.json(_user);
    }catch (e){
        return res.status(400).json(null)
    }
}

exports.user = async (req, res) => {
    try{
        const _user = await userModel.findOne({where: {id: req.params?.id || -1}});
        return res.json(_user);
    }catch (e){
        return res.status(400).json(null)
    }
}

exports.login = async (req, res) => {
    try{
        const _login = await userModel.findOne({where: {email: req.params?.email, password: req.params?.password || -1}});
        return res.json(_login);
    }catch (e){
        return res.status(400).json(null)
    }
}




