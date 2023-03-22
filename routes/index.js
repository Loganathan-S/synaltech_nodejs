let express      = require('express');
const {response} = require("express");
let router       = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

  let mqtt    = require('mqtt');
  let count =0;
  let client  = mqtt.connect("mqtt://192.168.1.46:1883");
  console.log("connected flag35225  " + client.connected);
//,{clientId:"1000_01252"}

//handle incoming messages
  client.on('message',function(topic, message, packet){
    console.log("message is "+ message);
    console.log("topic is "+ topic);
  });

  client.on("connect",function(){
    console.log("connected  "+ client.connected);
    publish(topic_list,"test",options);
  })

//handle errors
  client.on("error",function(error){
    console.log("Can't connect" + error);
    process.exit(1)});

//publish
  function publish(topic,msg,options){
    console.log("publishing",msg);

    if (client.connected == true){
      client.publish(topic,msg,options);
    }
    count+=1;
    if (count==2) //ens script
      clearTimeout(timer_id); //stop timer
    client.end();
  }


  let options={
    retain:true,
    qos:1};

  let message="{\"0\":true,\"1\":false,\"2\":false,\"3\":false}\n";
  let topic_list=["v1/devices/me/attributes","v1/devices/me/rpc/request","v1/devices/88231/attributes"];
  let topic_o={"topic22":0,"topic33":1,"topic44":1};
  console.log("subscribing to topics");

  client.subscribe(topic_list,{qos:1}); //topic list
  client.subscribe(topic_o); //object




  res.json({ title: 'synal tech service' });

});

module.exports = router;
