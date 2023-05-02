const apiKey = "?api_key=f4971231-5cc4-462d-86e2-b5691f6f78e7";
const url = "https://project-1-api.herokuapp.com/";

function displayComment(obj, id) {
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
  nameDiv.classList.add("main__conversation__comments__comment__comment__name");

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
  textEl.classList.add("main__conversation__comments__comment__comment__text");
  textEl.innerText = obj.comment;

  let modifyingDiv = document.createElement("div");
  modifyingDiv.classList.add("main__conversation__comments__comment__comment__modify");
  
  let likeDiv = document.createElement("div");
  likeDiv.classList.add(
    "main__conversation__comments__comment__comment__modify__like"
  );
   
  let likeButton = document.createElement("button");
  likeButton.classList.add(
    "main__conversation__comments__comment__comment__modify__like__button",
    "button"
  );

  likeButton.addEventListener("click", function (event) {
    // PUT /comments/:id/like
    axios
      .put(url + "comments/" + id + "/like" + apiKey)
      .then((response) => {
        console.log(response);
        // Update the number of likes in the UI
        numberLike.innerText = response.data.likes;
      })
      .catch((error) => {
        console.error(error);
      });
  });
  let imageLike = document.createElement("img");
  imageLike.classList.add(
    "main__conversation__comments__comment__comment__modify__like__button__image"
  );
  imageLike.setAttribute("src", "./assets/Icons/SVG/icon-like.svg");

  let numberLike = document.createElement("span");
  numberLike.classList.add(
    "main__conversation__comments__comment__comment__modify__like__number"
  );
  numberLike.innerText = obj.likes;
  
  let deleteDiv = document.createElement("div");
  deleteDiv.classList.add(
    "main__conversation__comments__comment__comment__modify__delete"
  );
  
  let deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "main__conversation__comments__comment__comment__modify__delete__button",
    "button"
  );

  deleteButton.addEventListener("click", function (event) {
    // PUT /comments/:id/like
    axios
      .delete(url + "comments/" + id + apiKey)
      .then((response) => {
        console.log(response);
        commentSec.remove();
      })
      .catch((error) => {
        console.error(error);
      });
  });

  let imageDelete = document.createElement("img");
  imageDelete.classList.add(
    "main__conversation__comments__comment__comment__modify__delete__button__image"
  );
  imageDelete.setAttribute("src", "./assets/Icons/SVG/icon-delete.svg");

  nameDiv.appendChild(nameEl);
  nameDiv.appendChild(dateEl);
  likeButton.appendChild(imageLike);
  likeDiv.appendChild(likeButton);
  likeDiv.appendChild(numberLike);
  deleteButton.appendChild(imageDelete);
  deleteDiv.appendChild(deleteButton);
  modifyingDiv.appendChild(likeDiv);
  modifyingDiv.appendChild(deleteDiv);
  comSec.appendChild(nameDiv);
  comSec.appendChild(textEl);
  comSec.appendChild(modifyingDiv);
  avatarSec.appendChild(imageDiv);
  commentSec.appendChild(avatarSec);
  commentSec.appendChild(comSec);

  commentsSec.appendChild(commentSec);
}

function getComments() {
  axios
    .get(url + "comments" + apiKey)
    .then((response) => {
      const getData = response.data;

      // sort comments by date
      getData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      // clear existing comments
      let commentsSec = document.querySelector(".main__conversation__comments");
      commentsSec.innerHTML = "";

      // display comments
      getData.forEach((obj) => displayComment(obj, obj.id));

    })
    .catch((error) => {
      console.error(error);
    });
}

// call getComments when page loads
getComments();

// submit the form
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
      .post(url + "comments" + apiKey, newComment, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        nameInput.value = "";
        commentInput.value = "";

        // call getComments again to display the newly posted comment
        getComments();
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
