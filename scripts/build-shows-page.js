// creating array of Shows
const Shows = [
  {
    DATE: "Mon Sep 06 2021",
    VENUE: "Ronald Lane",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Tue Sept 21 2021",
    VENUE: "Pier 3 East",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Fri Oct 15 2021",
    VENUE: "View Lounge",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Sat Nov 06 2021",
    VENUE: "Hyatt Agency",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Fri Nov 26 2021",
    VENUE: "Moscow Center",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Wed Dec 15 2021",
    VENUE: "Press Club",
    LOCATION: "San Francisco, CA",
  }
];


// declaring function for inserting shows
function insertNewShow(obj) {
const mobileSection = document.createElement("section");
mobileSection.classList.add("main__shows__mobile");
mainShowsSection.appendChild(mobileSection);

const mobileEventDiv = document.createElement("div");
mobileEventDiv.classList.add("main__shows__mobile__event");
mobileSection.appendChild(mobileEventDiv);

const mobileDateHeader = document.createElement("div");
mobileDateHeader.classList.add("main__shows__mobile__header", "label");
mobileDateHeader.innerText = "DATE";
mobileEventDiv.appendChild(mobileDateHeader);

const mobileDateDiv = document.createElement("div");
mobileDateDiv.classList.add("main__shows__mobile__date");
mobileDateDiv.innerText = obj.DATE;
mobileEventDiv.appendChild(mobileDateDiv);

const mobileVenueHeader = document.createElement("div");
mobileVenueHeader.classList.add("main__shows__mobile__header", "label");
mobileVenueHeader.innerText = "VENUE";
mobileEventDiv.appendChild(mobileVenueHeader);

const mobileVenueDataDiv = document.createElement("div");
mobileVenueDataDiv.classList.add("main__shows__mobile__data");
mobileVenueDataDiv.innerText = obj.VENUE;
mobileEventDiv.appendChild(mobileVenueDataDiv);

const mobileLocationHeader = document.createElement("div");
mobileLocationHeader.classList.add("main__shows__mobile__header", "label");
mobileLocationHeader.innerText = "LOCATION";
mobileEventDiv.appendChild(mobileLocationHeader);

const mobileLocationDataDiv = document.createElement("div");
mobileLocationDataDiv.classList.add("main__shows__mobile__data");
mobileLocationDataDiv.innerText = obj.LOCATION;
mobileEventDiv.appendChild(mobileLocationDataDiv);

const mobileButtonDiv = document.createElement("div");
mobileButtonDiv.classList.add("main__shows__mobile__data");

const mobileBuyTicketsButton = document.createElement("button");
mobileBuyTicketsButton.classList.add("main__shows__mobile__button", "button");
mobileBuyTicketsButton.innerText = "BUY TICKETS";
mobileButtonDiv.appendChild(mobileBuyTicketsButton);

mobileEventDiv.appendChild(mobileButtonDiv);

if (obj === Shows[0]) {
  const tableHeaderRow = document.createElement("div");
  tableHeaderRow.classList.add("main__shows__table__headerrow");
  tableSection.appendChild(tableHeaderRow);
  const dateHeader = document.createElement("div");
  dateHeader.classList.add("main__shows__table__header", "label");
  dateHeader.innerText = "DATE";
  tableHeaderRow.appendChild(dateHeader);
  const venueHeader = document.createElement("div");
  venueHeader.classList.add("main__shows__table__header", "label");
  venueHeader.innerText = "VENUE";
  tableHeaderRow.appendChild(venueHeader);
  const locationHeader = document.createElement("div");
  locationHeader.classList.add("main__shows__table__header", "label");
  locationHeader.innerText = "LOCATION";
  tableHeaderRow.appendChild(locationHeader);
  const emptyHeader = document.createElement("div");
  emptyHeader.classList.add("main__shows__table__header", "label");
  tableHeaderRow.appendChild(emptyHeader);
};

const tableEventDiv = document.createElement("div");
tableEventDiv.classList.add("main__shows__table__event");
tableSection.appendChild(tableEventDiv);

const tableDateDiv = document.createElement("div");
tableDateDiv.classList.add("main__shows__table__date");
tableDateDiv.innerText = obj.DATE;
tableEventDiv.appendChild(tableDateDiv);

const tableVenueDataDiv = document.createElement("div");
tableVenueDataDiv.classList.add("main__shows__table__data");
tableVenueDataDiv.innerText = obj.VENUE;
tableEventDiv.appendChild(tableVenueDataDiv);

const tableLocationDataDiv = document.createElement("div");
tableLocationDataDiv.classList.add("main__shows__table__data");
tableLocationDataDiv.innerText = obj.LOCATION;
tableEventDiv.appendChild(tableLocationDataDiv);

const tableButtonDiv = document.createElement("div");
tableButtonDiv.classList.add("main__shows__table__data");

const tableBuyTicketsButton = document.createElement("button");
tableBuyTicketsButton.classList.add("main__shows__table__button", "button");
tableBuyTicketsButton.innerText = "BUY TICKETS";
tableButtonDiv.appendChild(tableBuyTicketsButton);

tableEventDiv.appendChild(tableButtonDiv);
};


// adding shows by invoking function on Shows array objects
const mainShowsSection = document.createElement('section');
mainShowsSection.classList.add('main__shows');

const showsTitle = document.createElement('h2');
showsTitle.classList.add('main__shows__title');
showsTitle.innerText = 'Shows';
mainShowsSection.appendChild(showsTitle);

const tableSection = document.createElement("section");
tableSection.classList.add("main__shows__table");
mainShowsSection.appendChild(tableSection);

Shows.forEach((obj) => insertNewShow(obj));

const main = document.querySelector("main");
main.appendChild(mainShowsSection);

// changing color of selected events
const mobileEvents = document.querySelectorAll(".main__shows__mobile__event");
const tableEvents = document.querySelectorAll(".main__shows__table__event");

let selectedMobileEvent = null;
let selectedTableEvent = null;

for (let i = 0; i < mobileEvents.length; i++) {
  const mobileEvent = mobileEvents[i];

  mobileEvent.addEventListener("click", function () {
    if (selectedMobileEvent) {
      selectedMobileEvent.classList.remove("main__shows__mobile__event--selected");
    }
    selectedMobileEvent = mobileEvent;
    selectedMobileEvent.classList.add("main__shows__mobile__event--selected");
  });
}


for (let i = 0; i < tableEvents.length; i++) {
  const tableEvent = tableEvents[i];

  tableEvent.addEventListener("click", function () {
    if (selectedTableEvent) {
      selectedTableEvent.classList.remove("main__shows__table__event--selected");
    }
    selectedTableEvent = tableEvent;
    selectedTableEvent.classList.add("main__shows__table__event--selected");
  });
}

