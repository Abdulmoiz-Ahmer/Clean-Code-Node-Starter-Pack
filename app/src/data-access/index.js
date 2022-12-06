// /data-access/index.js

// your DB model definitions, in OneFood's case they are Mongoose files
import * as models from '../models';

import { makePositionsDb } from './positions.db';

export const positionsDb = makePositionsDb(models);
