const apiKey = "?api_key=f4971231-5cc4-462d-86e2-b5691f6f78e7";
const url = "https://project-1-api.herokuapp.com/";

const getComments = axios
  .get(url + "comments" + apiKey)
  .then((response) => {
    const getData = response.data;

    function displayComment(obj) {
      let commentsSec = document.querySelector(".main__conversation__comments");
      let commentSec = document.createElement("section");
      commentSec.classList.add("main__conversation__comments__comment");

      let avatarSec = document.createElement("section");
      avatarSec.classList.add("main__conversation__comments__comment__avatar");

      let imageDiv = document.createElement("div");
      imageDiv.classList.add(
        "main__conversation__comments__comment__avatar__image"
      );

      let comSec = document.createElement("section");
      comSec.classList.add("main__conversation__comments__comment__comment");

      let nameDiv = document.createElement("div");
      nameDiv.classList.add(
        "main__conversation__comments__comment__comment__name"
      );

      let nameEl = document.createElement("p");
      nameEl.classList.add(
        "main__conversation__comments__comment__comment__name__name"
      );
      nameEl.innerText = obj.name;

      let dateEl = document.createElement("p");
      dateEl.classList.add(
        "main__conversation__comments__comment__comment__name__date"
      );
      const date = new Date(obj.timestamp);
      const options = {
        timeZone: "UTC",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
      dateEl.innerText = date.toLocaleDateString("en-US", options);

      let textEl = document.createElement("p");
      textEl.classList.add(
        "main__conversation__comments__comment__comment__text"
      );
      textEl.innerText = obj.comment;

      nameDiv.appendChild(nameEl);
      nameDiv.appendChild(dateEl);
      comSec.appendChild(nameDiv);
      comSec.appendChild(textEl);
      avatarSec.appendChild(imageDiv);
      commentSec.appendChild(avatarSec);
      commentSec.appendChild(comSec);

      commentsSec.appendChild(commentSec);
    }

    // sort comments by date
    getData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    // display comments
    getData.forEach((obj) => displayComment(obj));
  })
  .catch((error) => {
    console.error(error);
  });

const form = document.querySelector(".main__conversation__form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.querySelector(
  ".main__conversation__form__comment__name__box"
  );
  const commentInput = document.querySelector(
  ".main__conversation__form__comment__comment__box"
  );

  if (!nameInput.value) {
    nameInput.classList.add("invalid");
    nameInput.placeholder = "Name field cannot be empty";
  } else if (!commentInput.value) {
    commentInput.classList.add("invalid");
    commentInput.placeholder = "Comment field cannot be empty";
  } else {
    nameInput.placeholder = "Enter your name";
    nameInput.classList.remove("invalid");
    commentInput.placeholder = "Add a new comment";
    commentInput.classList.remove("invalid");
    const newComment = {
      name: nameInput.value,
      comment: commentInput.value,
    };

    axios
      .post(url + "comments" + apiKey, newComment)
      .then((response) => {
        console.log(response.data);

        nameInput.value = "";
        commentInput.value = "";

        // display new comment
        displayComment(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
