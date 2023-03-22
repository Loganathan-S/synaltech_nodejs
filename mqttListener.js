const dbSynalTech = require('./models');
const mqtt        = require("mqtt");
const deviceModel = dbSynalTech.Devices;

let topic_list = ["v1/devices/+/attributes"];
let topic_send_list = "v1/devices/+/request/+";
module.exports = function (mqttClient,options) {
   // let mqttClient_2  = mqttClient.connect("mqtt://192.168.1.46:1883");

    //handle incoming messages
    try {
        mqttClient.on('message', function (topic, message, packet) {
            console.log("message is " + message);
            console.log("topic is " + topic);

            // const _device =  deviceModel.create({
            //                                              description     : message
            //                                          });
            console.log("on message connected flag ->  " + mqttClient.connected);
            console.log("device--->" + message);
          //  mqttClient.publish(topic_send_list,"from server",options);
            console.log("send");

        });
    }catch (e){
        console.log(e);
    }

    try {

        //let topic_list = ["v1/devices/me/attributes", "v1/devices/me/rpc/request/58:CF:79:1E:E7:88"];
        console.log("subscribing to topics");

        mqttClient.subscribe(topic_list, {qos: 1}); //topic list
       // mqttClient.subscribe(topic_o); //object

    }catch (e){
        console.log(e);
    }
}
