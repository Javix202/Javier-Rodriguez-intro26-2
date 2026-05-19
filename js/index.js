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
