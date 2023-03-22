const express                                                                         = require('express');
const {initHome, newUser, userList, user, login}                                                                     = require("../controllers/user.controller");
const {newDevice, deviceList, device, newDeviceList, updateDevice, updateDeviceLines, updateDeviceLineAction} = require("../controllers/device.controller");
const {newZone, zoneList, zone, deleteZone, updateZone}                = require("../controllers/zone.controller");
const {newSection, sectionList, section, deleteSection, updateSection} = require("../controllers/section.controller");
const {newLocation, locationList, locationbyid}                        = require("../controllers/locations.controller");
const {newSwitchBox, switchBoxList, switchBox, updateSwitchBox}                       = require("../controllers/switchbox.controller");
const {newZoneName} = require("../controllers/configurezone.controller")


const router                                                                          = express.Router();

router.get('/', initHome);

//Configure zone
router.post('/configureZone', newZoneName)

//User
router.post('/newUser', newUser);
router.get('/userList', userList);
router.get('/user/:id?', user);
router.post('/login/:email?/:password?', login);

//Devices
router.post('/newDevice', newDevice);
router.get('/newDeviceList', newDeviceList);
router.post('/updateDevice/:id?', updateDevice);
router.get('/deviceList', deviceList);
router.get('/device/:id?', device);
router.post('/device/line/:id?', updateDeviceLines);
router.post('/device/line/action/:id?', updateDeviceLineAction);

//Zone
router.post('/newZone', newZone);
router.get('/zoneList', zoneList);
router.get('/zone/:id?', zone);
router.post('/updateZone/:id?', updateZone);
router.post('/deleteZone/:id?', deleteZone);

//section
router.post('/newSection', newSection);
router.get('/sectionList', sectionList);
router.get('/section/:id?', section);
router.post('/updateSection/:id?', updateSection);
router.post('/deleteSection/:id?', deleteSection);

//location
router.post('/newLocation', newLocation);
router.get('/locationList', locationList);
router.get('/location/:id?', locationbyid);


//switchBoxs
router.post('/newSwitchBox', newSwitchBox);
router.get('/switchBoxList', switchBoxList);
router.get('/switchBox/:id?', switchBox);
router.post('/updateSwitchBox/:id?', updateSwitchBox);

//automation



module.exports = router;
