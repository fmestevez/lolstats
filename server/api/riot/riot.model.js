'use strict';

import mongoose from 'mongoose';

var RiotSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Riot', RiotSchema);
