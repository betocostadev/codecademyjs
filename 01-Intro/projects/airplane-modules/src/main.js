// import { airplanes, meetsRangeReq, meetsCrewReq } from './airplanes';

// The airplanes array
const airplanes = [
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
];

// Render the airplane list on the page:
const renderList = (airplanes) => {
  let old = document.getElementById('apcontainer');
  old.parentElement.removeChild(old);
  let airplanesContainer = document.createElement('article');
  airplanesContainer.classList.add('airplane__container')
  let main = document.getElementsByTagName('main')[0];
  main.appendChild(airplanesContainer);
  airplanes.forEach(function(element) {
    let airplane = document.createElement('section');
    airplane.classList.add('airplane__container-airplane');
    let airplaneName = document.createElement('P');
    let airplaneFuelCapacity = document.createElement('P');
    let airplaneMaxSpeed = document.createElement('P');
    let airplaneMinSpeed = document.createElement('P');
    let airplaneCrew = document.createElement('P');
    airplaneName.textContent = `Name: ${element.name}`;
    airplaneFuelCapacity.textContent = `Fuel Capacity: ${element.fuelCapacity}`;
    airplaneMaxSpeed.textContent = `Max Speed: ${element.maxSpeed}`;
    airplaneMinSpeed.textContent = `Min Speed: ${element.minSpeed}`;
    airplaneCrew.textContent = `Crew: ${element.crew}`;
    airplane.appendChild(airplaneName);
    airplane.appendChild(airplaneFuelCapacity);
    airplane.appendChild(airplaneMaxSpeed);
    airplane.appendChild(airplaneMinSpeed);
    airplane.appendChild(airplaneCrew);
    airplanesContainer.appendChild(airplane);
  });
  console.log('Yeah!');
};

// Add Airplane Function:
const addAirplane = (name, fuelCapacity, maxSpeed, minSpeed, crew) =>  {
  return airplanes.push({
    name: name,
    fuelCapacity: fuelCapacity,
    maxSpeed: maxSpeed,
    minSpeed: minSpeed,
    crew: crew,
    get printCrew() {
      return this.crew;
    },
    get range() {
      return maxSpeed - minSpeed;
    },
  }),
  renderList(airplanes);
};

// Check if the airplane meets the crew requirements
const meetsCrewReq = (crew) => {
  airplanes.forEach((airplane) => {
    if (crew <= airplane.crew.length) {
      console.log(`${airplane.name} crew is: ${airplane.printCrew}. Requirement Met!`);
    } else {
      console.log(`${airplane.name} crew is: ${airplane.printCrew}. Requirement NOT Met!`);
    }
  });
};

// Check if airplane meets the range requirements
const meetsRangeReq = (range) => {
  airplanes.forEach((airplane) => {
    if (range <= airplane.range) {
      console.log(`${airplane.name} range is:${airplane.range} Requirement Met!`);
    } else {
      console.log(`${airplane.name} range is:${airplane.range} Requirement NOT Met!`);
    }
  });
};

// TESTS:
// console.log(airplanes);
// addAirplane('A320', 3000, 900, 200, ['pilots', 'flightAttendants', 'engineers']);
// meetsRangeReq(750);
// meetsCrewReq(3);