const today = new Date();
const thisYear = today.getFullYear();

const body = document.querySelector("body");

const footer = document.createElement("footer");
body.appendChild(footer);

const footerContent = document.createElement("div");
footerContent.classList.add("footer-content");
footer.appendChild(footerContent);

const copyright = document.createElement("p");
copyright.classList.add("copyright");
copyright.innerHTML = `Javier Rodriguez © ${thisYear}`;
footerContent.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Git & GitHub", "Problem solving", "Logical thinking"];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> - ${usersMessage}</span>
  `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});
