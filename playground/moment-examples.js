var moment = require('moment');

console.log(moment().format());

// Unix Timestamps
// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment();

console.log('Current Timestamp', now.unix());
// Current Timestamp 1545165316

var timestamp = 1545165316;
var currentMoment = moment.unix(timestamp);
console.log('Current Moment', currentMoment.format("MMM D, YY @ h:mm a"));
// Current Moment Dec 18, 18 @ 3:35 pm

// Challenge Format: January 3rd, 2016 @ 12:13 AM

console.log('Current Moment', currentMoment.format("MMMM Do, YYYY @ h:mm A"));
// Current Moment December 18th, 2018 @ 3:35 PM
