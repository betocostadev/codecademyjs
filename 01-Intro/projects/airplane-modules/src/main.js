// import { airplanes, meetsRangeReq, meetsCrewReq } from './airplanes';
// Import disable due to browser constraints for client mode.

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

// DOM Main global variables

// Render the airplane list on the page:
const renderList = (airplanes) => {
  // Getting the element sibling and removing the next sibling
  // It is the first article for the airplanes GRID.
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
    airplaneName.setAttribute('data-airplanename', element.name);
    let airplaneFuelCapacity = document.createElement('P');
    let airplaneMaxSpeed = document.createElement('P');
    let airplaneMinSpeed = document.createElement('P');
    // Flight and Crew Requirements paragraphs
    let airplaneFlightReq = document.createElement('P');
    let airplaneCrewReq = document.createElement('P');
    // FlightReq (range) span tags and data for checking
    let flightReqConfim = document.createElement('SPAN');
    flightReqConfim.setAttribute('data-flightname', element.name);
    // crewReq span tags and data for checking
    let crewReqConfirm = document.createElement('SPAN');
    crewReqConfirm.setAttribute('data-crewname', element.name);
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
    airplaneFlightReq.textContent = `Flight (range) Requirement meet: `;
    airplaneCrewReq.textContent = `Crew (number) Requirement meet: `;
    flightReqConfim.textContent = ` - `;
    crewReqConfirm.textContent = ` - `;
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

// Get the airplane created by the user to run the add airplane function:
const getUserAirplane = (e) => {
  // Prevent form submit
  e.preventDefault();
  let name = document.getElementById('airplaneid').value;
  let fuelCapacity = document.getElementById('fuelqtd').value;
  let maxSpeed = document.getElementById('maxspd').value;
  let minSpeed = document.getElementById('minspd').value;
  let crewValue = document.getElementById('crew').value;
  // Checking the values
  if (name === '' || name === isNaN) {
    return;
  } else if (fuelCapacity === '' || fuelCapacity === isNaN) {
    return;
  } else if (maxSpeed === '' || maxSpeed === isNaN) {
    return;
  } else if (minSpeed === '' || minSpeed === isNaN) {
    return;
  } else if (crewValue === '') {
    return
  } else {
    // Change the crew to an array and run the addAirplane function
    let crew = crewValue.split(',');
    addAirplane(name, fuelCapacity, maxSpeed, minSpeed, crew);
  }
}

// Global variables for the addAirplane function:
const addAirplaneBtn = document.getElementById('addairplanebtn');
addAirplaneBtn.addEventListener('click', getUserAirplane);

// Check if the airplane meets the crew requirements
const meetsCrewReq = (crew) => {
  airplanes.forEach((airplane) => {
    // Getting the airplane name in the DOM
    let airplaneConfirm = document.querySelector(`p[data-airplanename="${airplane.name}"]`);
    // Getting the crewConfir airplane name in the DOM, to run only on the correct airplane.
    let crewConfirm = document.querySelector(`span[data-crewname="${airplane.name}"]`);
    // Checking the crew and applying the text
    if (crew <= airplane.crew.length && crewConfirm.dataset.crewname === airplaneConfirm.dataset.airplanename) {
      // Add the text
      crewConfirm.textContent = 'Yes';
      // Change the class
      crewConfirm.classList.add('good');
      if (crewConfirm.classList.contains('bad')) {
        crewConfirm.classList.remove('bad');
      }
    } else if (crew > airplane.crew.length && crewConfirm.dataset.crewname === airplaneConfirm.dataset.airplanename){
      crewConfirm.textContent = 'No';
      crewConfirm.classList.add('bad');
      if (crewConfirm.classList.contains('good')) {
        crewConfirm.classList.remove('good');
      }
    }
  });
};
const callCrewCheck = e => {
  // Prevent form submit
  e.preventDefault();
  const flightCrew = document.getElementById('flightcrew').value;
  if (flightCrew === '' || flightCrew === isNaN) {
    return;
  } else {
    meetsCrewReq(flightCrew);
  }
}

// Global variables for the crew check req function:
const checkCrewReq = document.getElementById('checkcrewreq');
checkCrewReq.addEventListener('click', callCrewCheck);

// Check if airplane meets the range requirements
const meetsRangeReq = (range) => {
  airplanes.forEach((airplane) => {
    // Getting the airplane name
    let airplaneConfirm = document.querySelector(`p[data-airplanename="${airplane.name}"]`);
    // Getting the flightreq (range) name for the same airplane
    let flightConfirm = document.querySelector(`span[data-flightname="${airplane.name}"]`);
    // Checking the range and applying the text
    if (range <= airplane.range && flightConfirm.dataset.flightname === airplaneConfirm.dataset.airplanename) {
      flightConfirm.textContent = 'Yes';
      flightConfirm.classList.add('good');
      if (flightConfirm.classList.contains('bad')) {
        flightConfirm.classList.remove('bad');
      }
    } else if (range > airplane.range && flightConfirm.dataset.flightname === airplaneConfirm.dataset.airplanename){
      flightConfirm.textContent = 'No';
      flightConfirm.classList.add('bad');
      if (flightConfirm.classList.contains('good')) {
        flightConfirm.classList.remove('good');
      }
    }
  });
};

const callRangeCheck = e => {
  // Prevent form submit
  e.preventDefault();
  const flightReq = document.getElementById('flightreq').value;
  if(flightReq === '' || flightReq === isNaN) {
    return;
  } else {
    meetsRangeReq(flightReq);
  }
}

// Global variables for the check flight req function:
const checkFlightReq = document.getElementById('checkflightreq');
checkFlightReq.addEventListener('click', callRangeCheck);


// TESTS:
// console.log(airplanes);
// addAirplane('A320', 3000, 900, 200, ['pilots', 'flightAttendants', 'engineers']);
// meetsRangeReq(750);
// meetsCrewReq(3);