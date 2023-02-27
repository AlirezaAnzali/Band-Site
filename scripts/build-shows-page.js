const apiKey = "?api_key=f4971231-5cc4-462d-86e2-b5691f6f78e7";
const url = "https://project-1-api.herokuapp.com/";

// declaring function for inserting shows
function insertNewShow(obj, data) {
  let mobileSection = document.querySelector(".main__shows__mobile");

  const mobileEventDiv = document.createElement("div");
  mobileEventDiv.classList.add("main__shows__mobile__event");
  mobileSection.appendChild(mobileEventDiv);

  const mobileDateHeader = document.createElement("div");
  mobileDateHeader.classList.add("main__shows__mobile__header", "label");
  mobileDateHeader.innerText = "DATE";
  mobileEventDiv.appendChild(mobileDateHeader);

  const mobileDateDiv = document.createElement("div");
  mobileDateDiv.classList.add("main__shows__mobile__date");
  const date = new Date(obj.date);
  const options = {
    timeZone: "UTC",
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  const formattedDate = date
    .toLocaleDateString("en-US", options)
    .replace(/,/g, ""); // remove the commas
  mobileDateDiv.innerText = formattedDate;
  mobileEventDiv.appendChild(mobileDateDiv);

  const mobileVenueHeader = document.createElement("div");
  mobileVenueHeader.classList.add("main__shows__mobile__header", "label");
  mobileVenueHeader.innerText = "VENUE";
  mobileEventDiv.appendChild(mobileVenueHeader);

  const mobileVenueDataDiv = document.createElement("div");
  mobileVenueDataDiv.classList.add("main__shows__mobile__data");
  mobileVenueDataDiv.innerText = obj.place;
  mobileEventDiv.appendChild(mobileVenueDataDiv);

  const mobileLocationHeader = document.createElement("div");
  mobileLocationHeader.classList.add("main__shows__mobile__header", "label");
  mobileLocationHeader.innerText = "LOCATION";
  mobileEventDiv.appendChild(mobileLocationHeader);

  const mobileLocationDataDiv = document.createElement("div");
  mobileLocationDataDiv.classList.add("main__shows__mobile__data");
  mobileLocationDataDiv.innerText = obj.location;
  mobileEventDiv.appendChild(mobileLocationDataDiv);

  const mobileButtonDiv = document.createElement("div");
  mobileButtonDiv.classList.add("main__shows__mobile__data");

  const mobileBuyTicketsButton = document.createElement("button");
  mobileBuyTicketsButton.classList.add("main__shows__mobile__button", "button");
  mobileBuyTicketsButton.innerText = "BUY TICKETS";
  mobileButtonDiv.appendChild(mobileBuyTicketsButton);

  mobileEventDiv.appendChild(mobileButtonDiv);

  let tableSection = document.querySelector(".main__shows__table");
  if (obj === data[0]) {
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
  }

  const tableEventDiv = document.createElement("div");
  tableEventDiv.classList.add("main__shows__table__event");
  tableSection.appendChild(tableEventDiv);

  const tableDateDiv = document.createElement("div");
  tableDateDiv.classList.add("main__shows__table__date");
  tableDateDiv.innerText = formattedDate;
  tableEventDiv.appendChild(tableDateDiv);

  const tableVenueDataDiv = document.createElement("div");
  tableVenueDataDiv.classList.add("main__shows__table__data");
  tableVenueDataDiv.innerText = obj.place;
  tableEventDiv.appendChild(tableVenueDataDiv);

  const tableLocationDataDiv = document.createElement("div");
  tableLocationDataDiv.classList.add("main__shows__table__data");
  tableLocationDataDiv.innerText = obj.location;
  tableEventDiv.appendChild(tableLocationDataDiv);

  const tableButtonDiv = document.createElement("div");
  tableButtonDiv.classList.add("main__shows__table__data");

  const tableBuyTicketsButton = document.createElement("button");
  tableBuyTicketsButton.classList.add("main__shows__table__button", "button");
  tableBuyTicketsButton.innerText = "BUY TICKETS";
  tableButtonDiv.appendChild(tableBuyTicketsButton);

  tableEventDiv.appendChild(tableButtonDiv);
}

function getShows() {
  axios
    .get(url + "showdates" + apiKey)
    .then((response) => {
      const getData = response.data;
      console.log(getData);

      // sort comments by date
      getData.sort((a, b) => new Date(a.date) - new Date(b.date));

      // adding shows by invoking function on Shows array objects
      const mainShowsSection = document.createElement("section");
      mainShowsSection.classList.add("main__shows");

      const showsTitle = document.createElement("h2");
      showsTitle.classList.add("main__shows__title");
      showsTitle.innerText = "Shows";
      mainShowsSection.appendChild(showsTitle);

      let mobileSection = document.createElement("section");
      mobileSection.classList.add("main__shows__mobile");
      mainShowsSection.appendChild(mobileSection);

      let tableSection = document.createElement("section");
      tableSection.classList.add("main__shows__table");
      mainShowsSection.appendChild(tableSection);

      const main = document.querySelector("main");
      main.appendChild(mainShowsSection);

      // display shows
      getData.forEach((obj) => insertNewShow(obj, getData));

      // changing color of selected events
      const mobileEvents = document.querySelectorAll(
        ".main__shows__mobile__event"
      );
      console.log(mobileEvents);
      const tableEvents = document.querySelectorAll(
        ".main__shows__table__event"
      );

      let selectedMobileEvent = null;
      let selectedTableEvent = null;

      for (let i = 0; i < mobileEvents.length; i++) {
        const mobileEvent = mobileEvents[i];
        console.log(mobileEvent);
        mobileEvent.addEventListener("click", function () {
          if (selectedMobileEvent) {
            selectedMobileEvent.classList.remove(
              "main__shows__mobile__event--selected"
            );
          }
          selectedMobileEvent = mobileEvent;
          console.log(selectedMobileEvent);
          selectedMobileEvent.classList.add(
            "main__shows__mobile__event--selected"
          );
        });
      }

      for (let i = 0; i < tableEvents.length; i++) {
        const tableEvent = tableEvents[i];

        tableEvent.addEventListener("click", function () {
          if (selectedTableEvent) {
            selectedTableEvent.classList.remove(
              "main__shows__table__event--selected"
            );
          }
          selectedTableEvent = tableEvent;
          console.log(selectedTableEvent);
          selectedTableEvent.classList.add(
            "main__shows__table__event--selected"
          );
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// call getComments when page loads
getShows();


