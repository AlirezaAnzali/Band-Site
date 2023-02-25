const comments = [
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// displayComment function for manipulating DOM
function displayComment(obj) {
  let commentsSec = document.querySelector(".main__conversation__comments");
  let commentSec = document.createElement("section");
  commentSec.classList.add("main__conversation__comments__comment");

  let avatarSec = document.createElement("section");
  avatarSec.classList.add("main__conversation__comments__comment__avatar");

  let imageDiv = document.createElement("div");
  imageDiv.classList.add("main__conversation__comments__comment__avatar__image");

  let comSec = document.createElement("section");
  comSec.classList.add("main__conversation__comments__comment__comment");

  let nameDiv = document.createElement("div");
  nameDiv.classList.add("main__conversation__comments__comment__comment__name");

  let nameEl = document.createElement("p");
  nameEl.classList.add("main__conversation__comments__comment__comment__name__name");
  nameEl.innerText = obj.name;

  let dateEl = document.createElement("p");
  dateEl.classList.add("main__conversation__comments__comment__comment__name__date");
  dateEl.innerText = obj.timestamp;

  let textEl = document.createElement("p");
  textEl.classList.add("main__conversation__comments__comment__comment__text");
  textEl.innerText = obj.text;

  nameDiv.appendChild(nameEl);
  nameDiv.appendChild(dateEl);
  comSec.appendChild(nameDiv);
  comSec.appendChild(textEl);
  avatarSec.appendChild(imageDiv);
  commentSec.appendChild(avatarSec);
  commentSec.appendChild(comSec);

  commentsSec.appendChild(commentSec);
}

// making comment section by comments array and function
for (let i=0; i<comments.length;i++) {
    displayComment(comments[i]);
};

const form = document.querySelector(".main__conversation__form");

// Add an event listener to the form
form.addEventListener("submit", function (event) {
  // Prevent the form from submitting
  event.preventDefault();

  const nameInput = document.querySelector(
    ".main__conversation__form__comment__name__box"
  );
  const commentInput = document.querySelector(
    ".main__conversation__form__comment__comment__box"
  );
  // Get the submitting time
  const currentDate = new Date();
  const options = {
    timeZone: "UTC",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  // Create a new object with the form values
  const newObj = {
    name: nameInput.value,
    timestamp: formattedDate,
    text: commentInput.value,
  };

  // push new object to array
  comments.push(newObj);

  // sorting object in array by Date
  comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  // Clear all comments from the page
  const commentsSec = document.querySelector(".main__conversation__comments");
  commentsSec.innerHTML = "";

  // Re-render all comments from the comment array
  comments.forEach((obj) => displayComment(obj));

  // Clear the input fields
  nameInput.value = "";
  commentInput.value = "";

  console.log(commentsSec.innerHTML);
});

