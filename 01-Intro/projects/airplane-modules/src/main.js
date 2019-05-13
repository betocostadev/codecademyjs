// import { airplanes, meetsRangeReq, meetsCrewReq } from './airplanes';

// The airplanes array
const airplanes = [
  {
    name: 'B737',
    fuelCapacity: 3000,
    maxSpeed: 950,
    minSpeed: 250,
    crew: ['pilots', 'flight Attendants', 'engineers', 'medical Assistance'],
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
    crew: ['pilots', 'flight Attendants', 'engineers', 'medical Assistance', 'sensor Operators'],
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
  // Getting the element sibling and removing the next sibling
  let sibling = document.getElementsByClassName('airplane__functions')[0];
  sibling.parentElement.removeChild(sibling.nextElementSibling);
  // Creating the airplanes container
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
    // Flight and Crew Requirements paragraphs
    let airplaneFlightReq = document.createElement('P');
    let airplaneCrewReq = document.createElement('P');
    let flightReqConfim = document.createElement('SPAN');
    flightReqConfim.setAttribute('data-name', element.name);
    // flightReqConfim.classList.add('airplane__flight-req');
    let crewReqConfirm = document.createElement('SPAN');
    crewReqConfirm.setAttribute('data-name', element.name);
    // crewReqConfirm.classList.add('airplane__crew-req');
    // Handle the crew, put each one in a list-item
    let airplaneCrewContainer = document.createElement('UL');
    for (let i = 0; i < element['crew'].length; i++) {
      let listItem = document.createElement('LI');
      listItem.classList.add('crew__list-item');
      listItem.textContent = `${element['crew'][i]}`;
      airplaneCrewContainer.appendChild(listItem);
    }
    // Add text to the elements
    airplaneName.textContent = `Name: ${element.name}`;
    airplaneFuelCapacity.textContent = `Fuel Capacity: ${element.fuelCapacity}`;
    airplaneMaxSpeed.textContent = `Max Speed: ${element.maxSpeed}`;
    airplaneMinSpeed.textContent = `Min Speed: ${element.minSpeed}`;
    airplaneFlightReq.textContent = `Flight Requirement meet: `;
    airplaneCrewReq.textContent = `Crew Requirement meet: `;
    flightReqConfim.textContent = `Placeholder`;
    crewReqConfirm.textContent = `Placeholder`;
    // Add the items to the container
    airplane.appendChild(airplaneName);
    airplane.appendChild(airplaneFuelCapacity);
    airplane.appendChild(airplaneMaxSpeed);
    airplane.appendChild(airplaneMinSpeed);
    airplane.appendChild(airplaneCrewContainer);
    airplane.appendChild(airplaneFlightReq);
    airplane.appendChild(airplaneCrewReq);
    airplaneFlightReq.appendChild(flightReqConfim);
    airplaneCrewReq.appendChild(crewReqConfirm);
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
    // Need to change here!
    // Find a way to associate each airplane with it's own span tag inside the document.
    // Probably using a data. Put data instead of class for the span elements inside the
    // create airplane function
    let crewConfirm = document.querySelectorAll(`data-name[${airplane.name}]`);
    if (crew <= airplane.crew.length) {
      crewConfirm.textContent = 'Good!';
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