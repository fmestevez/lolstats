/**
 * Riot model events
 */

'use strict';

import {EventEmitter} from 'events';
import Riot from './riot.model';
var RiotEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RiotEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Riot.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    RiotEvents.emit(event + ':' + doc._id, doc);
    RiotEvents.emit(event, doc);
  }
}

export default RiotEvents;
