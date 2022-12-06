// /routes/positions.routes.js

import express from 'express';

import controller from 'controllers/positions.controller';
import { makeExpressCallback } from './make-callback';

const router = express.Router();

router.route('/position').post(makeExpressCallback(controller.postPosition));

module.exports = router;
