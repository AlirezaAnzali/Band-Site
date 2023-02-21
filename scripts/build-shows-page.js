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

function insertNewShow(obj) {
const mobileSection = document.createElement("section");
mobileSection.classList.add("main_shows_mobile");
mainShowsSection.appendChild(mobileSection);

const mobileEventDiv = document.createElement("div");
mobileEventDiv.classList.add("main_shows_mobile_event");
mobileSection.appendChild(mobileEventDiv);

const mobileDateHeader = document.createElement("div");
mobileDateHeader.classList.add("main_shows_mobile_header", "label");
mobileDateHeader.innerText = "DATE";
mobileEventDiv.appendChild(mobileDateHeader);

const mobileDateDiv = document.createElement("div");
mobileDateDiv.classList.add("main_shows_mobile_date");
mobileDateDiv.innerText = obj.DATE;
mobileEventDiv.appendChild(mobileDateDiv);

const mobileVenueHeader = document.createElement("div");
mobileVenueHeader.classList.add("main_shows_mobile_header", "label");
mobileVenueHeader.innerText = "VENUE";
mobileEventDiv.appendChild(mobileVenueHeader);

const mobileVenueDataDiv = document.createElement("div");
mobileVenueDataDiv.classList.add("main_shows_mobile_data");
mobileVenueDataDiv.innerText = obj.VENUE;
mobileEventDiv.appendChild(mobileVenueDataDiv);

const mobileLocationHeader = document.createElement("div");
mobileLocationHeader.classList.add("main_shows_mobile_header", "label");
mobileLocationHeader.innerText = "LOCATION";
mobileEventDiv.appendChild(mobileLocationHeader);

const mobileLocationDataDiv = document.createElement("div");
mobileLocationDataDiv.classList.add("main_shows_mobile_data");
mobileLocationDataDiv.innerText = obj.LOCATION;
mobileEventDiv.appendChild(mobileLocationDataDiv);

const mobileButtonDiv = document.createElement("div");
mobileButtonDiv.classList.add("main_shows_mobile_data");

const mobileBuyTicketsButton = document.createElement("button");
mobileBuyTicketsButton.classList.add("main_shows_mobile_button", "button");
mobileBuyTicketsButton.innerText = "BUY TICKETS";
mobileButtonDiv.appendChild(mobileBuyTicketsButton);

mobileEventDiv.appendChild(mobileButtonDiv);

if (obj === Shows[0]) {
  const tableHeaderRow = document.createElement("div");
  tableHeaderRow.classList.add("main_shows_table_headerrow");
  tableSection.appendChild(tableHeaderRow);
  const dateHeader = document.createElement("div");
  dateHeader.classList.add("main_shows_table_header", "label");
  dateHeader.innerText = "DATE";
  tableHeaderRow.appendChild(dateHeader);
  const venueHeader = document.createElement("div");
  venueHeader.classList.add("main_shows_table_header", "label");
  venueHeader.innerText = "VENUE";
  tableHeaderRow.appendChild(venueHeader);
  const locationHeader = document.createElement("div");
  locationHeader.classList.add("main_shows_table_header", "label");
  locationHeader.innerText = "LOCATION";
  tableHeaderRow.appendChild(locationHeader);
  const emptyHeader = document.createElement("div");
  emptyHeader.classList.add("main_shows_table_header", "label");
  tableHeaderRow.appendChild(emptyHeader);
};

const tableEventDiv = document.createElement("div");
tableEventDiv.classList.add("main_shows_table_event");
tableSection.appendChild(tableEventDiv);

const tableDateDiv = document.createElement("div");
tableDateDiv.classList.add("main_shows_table_date");
tableDateDiv.innerText = obj.DATE;
tableEventDiv.appendChild(tableDateDiv);

const tableVenueDataDiv = document.createElement("div");
tableVenueDataDiv.classList.add("main_shows_table_data");
tableVenueDataDiv.innerText = obj.VENUE;
tableEventDiv.appendChild(tableVenueDataDiv);

const tableLocationDataDiv = document.createElement("div");
tableLocationDataDiv.classList.add("main_shows_table_data");
tableLocationDataDiv.innerText = obj.LOCATION;
tableEventDiv.appendChild(tableLocationDataDiv);

const tableButtonDiv = document.createElement("div");
tableButtonDiv.classList.add("main_shows_table_data");

const tableBuyTicketsButton = document.createElement("button");
tableBuyTicketsButton.classList.add("main_shows_table_button", "button");
tableBuyTicketsButton.innerText = "BUY TICKETS";
tableButtonDiv.appendChild(tableBuyTicketsButton);

tableEventDiv.appendChild(tableButtonDiv);
};

const mainShowsSection = document.createElement('section');
mainShowsSection.classList.add('main_shows');

const showsTitle = document.createElement('h2');
showsTitle.classList.add('main_shows_title');
showsTitle.innerText = 'Shows';
mainShowsSection.appendChild(showsTitle);

const tableSection = document.createElement("section");
tableSection.classList.add("main_shows_table");
mainShowsSection.appendChild(tableSection);

Shows.forEach((obj) => insertNewShow(obj));

const main = document.querySelector("main");
main.appendChild(mainShowsSection);


