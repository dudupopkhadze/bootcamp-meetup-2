/**
 *   Mini User List
 *   App Description
 * - Add onSubmit handler on form
 * - Validate input values
 * - Show error message if input is invalid
 * - Hide error message on input change
 * - Create user with input values
 * - Render user card in users container
 * - Allow remove && star/unstar functionality on user card
 * - Allow creation of user card with pre-defined array
 */

// constant variables
const heartEmoji = "❤️";
const brokenHeartEmoji = "💔";
const trashEmoji = "🗑️";

const usersArray = [
  {
    name: "John",
    email: "john@lock.com",
    image:
      "https://imgs.search.brave.com/EZ95Bi4ksNynjvgU-uIxQIo_2kXIvbb3fX3qf9Yrs9A/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnN0/YWNrLmltZ3VyLmNv/bS9HekNiRS5qcGc",
  },

  {
    name: "Lebron",
    email: "lebron@lakers.com",
    image:
      "https://imgs.search.brave.com/DKiZFcO_tXXQzTYDGjRlF2VpxLJSAD7HDLjpGXuPb9o/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXN2Yy50aW1laW5j/YXBwLmNvbS92My9m/YW4vaW1hZ2U_dXJs/PWh0dHBzOi8vcGlw/cGVuYWludGVhc3ku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9n/ZXR0eS1pbWFnZXMv/MjAxNi8wNC8xMTMw/MTU0MzU4LmpwZWcm/Yz1zYyZ3PTMyMDAm/aD0yMTMz",
  },

  {
    name: "Michael",
    email: "youngkidslover@dunder.com",
    image:
      "https://imgs.search.brave.com/crc5r4iM8mUjDjHU3BtDN8XTXFyKrv-Ks1CZaMASq4U/rs:fit:1200:1200:1/g:ce/aHR0cDovL2JyaXR0/YW55YmVsbGFuY2Eu/Y29tL2FkdndlYjEv/Z3czL2ltYWdlcy9t/aWNoYWVsLnBuZw",
  },
];

// Put DOM elements into variables

const form = document.getElementById("my-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const imageInput = document.getElementById("image");
const error = document.getElementById("error");
const users = document.getElementById("users");

const inputs = [nameInput, emailInput, imageInput];
for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  input.addEventListener("input", function () {
    if (!hasAppError) return;
    error.textContent = "";
    error.classList.remove("error");
    hasAppError = false;
  });
}

// application variables
let hasAppError = false;

// Add listeners on dom events

form.addEventListener("submit", onSubmit);

// Helper Functions

function isValidInput(name, email, image) {
  if (name === "") {
    return false;
  }

  if (!email.includes("@")) {
    return false;
  }

  if (!image.includes("https")) {
    return false;
  }

  return true;
}

function createUserCard(name, email, imageLink) {
  const userContainer = document.createElement("div");
  userContainer.classList.add("userContainer");
  userContainer.id = email;

  const userNameTag = document.createElement("h1");
  userNameTag.textContent = name;
  userContainer.appendChild(userNameTag);

  const userEmailTag = document.createElement("h4");
  userEmailTag.textContent = email;
  userContainer.appendChild(userEmailTag);

  const userImageTag = document.createElement("img");
  userImageTag.src = imageLink;
  userImageTag.classList.add("userImage");
  userContainer.appendChild(userImageTag);

  usersArray.push({ name, email, image: imageLink });

  users.appendChild(userContainer);
}

// Form submit handler
function onSubmit(event) {
  event.preventDefault();

  const userName = nameInput.value;
  const userEmail = emailInput.value;
  const userImage = imageInput.value;

  const isValidValues = isValidInput(userName, userEmail, userImage);

  if (!isValidValues) {
    error.textContent = "Please fill in inputs with valid values.";
    error.classList.add("error");
    hasAppError = true;
    return;
  }

  createUserCard(userName, userEmail, userImage);
  nameInput.value = "";
  emailInput.value = "";
  imageInput.value = "";
}

usersArray.map(({ name, email, image }) => createUserCard(name, email, image));
