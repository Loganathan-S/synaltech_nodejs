var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dbSynalTech   = require('./models/index');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
let options={
   retain:true,
   qos:1};



// app.use('/', indexRouter);
// app.use('/users', usersRouter);
dbSynalTech.sequelize.sync().then(() => {
   console.log('Common Database sync success...');
});

let mqtt    = require('mqtt');
let mqttClient  = mqtt.connect("mqtt://192.168.1.46:1883");
console.log("connected flag ->  " + mqttClient.connected);


const corsOpts = {
   origin: '*',

   methods: [
      'GET',
      'POST',
   ],

   allowedHeaders: [
      'Content-Type',
   ],
};

var server = app.listen(4000, function() {
   console.log('Ready on port %d', server.address().port);
});

app.use(async (req,res,next)=>{
   req.mqttClient = mqttClient;
   req.mqttOptions = options;

   //allow access from every, elminate CORS
   res.setHeader('Access-Control-Allow-Origin','*');
   res.removeHeader('x-powered-by');
   //set the allowed HTTP methods to be requested
   res.setHeader('Access-Control-Allow-Methods','POST');
   //headers clients can use in their requests
   res.setHeader('Access-Control-Allow-Headers','Content-Type');
   //allow request to continue and be handled by routes

   next();
});


require('./mqttListener')(mqttClient,options);

app.use(require('./routes/app.route'));

module.exports = app;
