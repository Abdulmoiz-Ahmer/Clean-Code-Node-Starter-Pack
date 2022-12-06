// /routes/index.js

import express from 'express';
import ping from './ping.routes';
import positions from './positions.routes';

const router = express.Router();

// Bonus: you can split this /routes folder in 2: private and public.
// In the private index.js file you would precede all routes declaration
// with a function that checks if the authentication token is present
// in all requests and it's valid.
router.use(ping);
router.use(positions);

module.exports = router;
