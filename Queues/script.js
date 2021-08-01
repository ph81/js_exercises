const runway = require('./runway');

/*
We want to create a program in script.js using a library of functions in the runway.js file. 
The program will help  the air traffic control at Codecademy International Airport move planes 
to the runway and allow those planes to take off in a FIFO order.
*/

const flights = [
  'Botswana Bird flight #345',
  'Singapore Skies flight #890',
  'Mexico Mirage flight #234',
  'Greenland Flying Seals flight #567'
];

// Enqueue runway with planes
const departing = runway.load(flights);
// Clear each plane to takeoff
runway.clear(departing);
