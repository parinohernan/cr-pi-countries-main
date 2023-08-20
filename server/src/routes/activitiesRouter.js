const { Router } = require("express");

const {getActivitiesHandler, postActivityHandler } = require('../handlers/activitiesHandlers');
//const { postActivity } = require("../controllers/Activities");


activitiesRouter=Router();

activitiesRouter.get('/', getActivitiesHandler);

activitiesRouter.post('/', postActivityHandler );

module.exports = activitiesRouter;