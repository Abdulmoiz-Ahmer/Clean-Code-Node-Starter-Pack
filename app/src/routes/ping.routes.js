// /routes/positions.routes.js

import express from 'express';

import controller from 'controllers/ping.controller';
import { makeExpressCallback } from './make-callback';

const router = express.Router();

router.route('/ping').get(makeExpressCallback(controller.getPing));

module.exports = router;
