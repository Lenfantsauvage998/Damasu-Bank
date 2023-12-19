import express from 'express';
const routerCdt = express.Router();
//import controllers
import cdtController from '../controllers/cdt.js';

//routes
routerCdt.route('/createCdt').post(cdtController);

export default routerCdt;

