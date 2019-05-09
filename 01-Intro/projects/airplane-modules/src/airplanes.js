/* Uncaught ReferenceError: require is not defined
Due to the error above, this file is 'deactivated'.
There will be no modules for this project. All the code is going to be on main.js */

// Airplanes Initial array
// let Airplane = '';
/* const airplanes = [
  {
    name: 'B737',
    fuelCapacity: 3000,
    maxSpeed: 950,
    minSpeed: 250,
    crew: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance'],
    get printCrew() {
      return this.crew;
    },
    get range() {
      return this.maxSpeed - this.minSpeed;
    },
  },
  {
    name: 'B787',
    fuelCapacity: 4500,
    maxSpeed: 1150,
    minSpeed: 280,
    crew: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
    get printCrew() {
      return this.crew;
    },
    get range() {
      return this.maxSpeed - this.minSpeed;
    },
  },
]; */

// Add Airplane - TEST:
// addAirplane('A320', 3000, 900, 200, ['pilots', 'flightAttendants', 'engineers']);
// console.log(airplanes);


/* // Check if airplane meets the range requirements
const meetsRangeReq = (range) => {
  airplanes.forEach((airplane) => {
    if (range <= airplane.range) {
      console.log(`${airplane.name} range is:${airplane.range} Requirement Met!`);
    } else {
      console.log(`${airplane.name} range is:${airplane.range} Requirement NOT Met!`);
    }
  });
}; */

/* // Check if the airplane meets the crew requirements
const meetsCrewReq = (crew) => {
  airplanes.forEach((airplane) => {
    if (crew <= airplane.crew.length) {
      console.log(`${airplane.name} crew is: ${airplane.printCrew}. Requirement Met!`);
    } else {
      console.log(`${airplane.name} crew is: ${airplane.printCrew}. Requirement NOT Met!`);
    }
  });
}; */

// Requirements TEST:
// meetsRangeReq(750);
// meetsCrewReq(3);

// MODULE EXPORT:

// export { airplanes, meetsRangeReq, meetsCrewReq };
