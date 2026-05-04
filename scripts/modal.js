const projects = [
  {
    title: "Weather Dashboard",
    image_label: "Weather API Preview",
    details:
      "This project fetches live forecast data from the National Weather Service API and displays the current temperature and short forecast for Missoula. It helped me practice async JavaScript, API requests, loading states, and updating the page with real data.",
    link_text: "View Project",
    href: "#home",
  },
  {
    title: "Theme Toggle UI",
    image_label: "Theme Toggle Preview",
    details:
      "This project adds a light and dark mode button to a web page. It uses JavaScript event handling, classList, and CSS variables to update the page visually when the user interacts with the button.",
    link_text: "View Project",
    href: "#home",
  },
  {
    title: "Road Trip Planner",
    image_label: "Road Trip Planner Preview",
    details:
      "This project runs JavaScript calculations for a road trip, including total distance, gallons needed, estimated gas cost, and gas stop checkpoints. It was useful practice with variables, functions, if/else logic, loops, and console output.",
    link_text: "View Project",
    href: "#home",
  },
  {
    title: "Project Modal Portfolio",
    image_label: "Portfolio Modal Preview",
    details:
      "This project uses a responsive project card layout and a modal window to show more details about each project without leaving the page. It helped me practice DOM manipulation, event listeners, semantic HTML, and accessible interaction patterns.",
    link_text: "View Project",
    href: "#home",
  },
];

const modal = document.querySelector("#project-modal");
const modal_title = document.querySelector("#modal-title");
const modal_details = document.querySelector("#modal-details");
const modal_link = document.querySelector("#modal-link");
const modal_close = document.querySelector("#modal-close");
const modal_image = document.querySelector("#modal-image");

const card_buttons = document.querySelectorAll(".project-card");
const theme_toggle = document.querySelector("#theme-toggle");

function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;

  modal_title.textContent = project.title;
  modal_details.textContent = project.details;
  modal_link.textContent = project.link_text;
  modal_link.href = project.href;
  modal_image.textContent = project.image_label;

  modal.showModal();
  document.body.style.overflow = "hidden";
  modal.focus();
}

function onCardClicked(event) {
  const clicked_card = event.currentTarget;
  const index = Number(clicked_card.dataset.index);
  openModalByIndex(index);
}

for (let i = 0; i < card_buttons.length; i++) {
  card_buttons[i].addEventListener("click", onCardClicked);
}

modal_close.addEventListener("click", function () {
  modal.close();
});

modal.addEventListener("close", function () {
  document.body.style.overflow = "";
});

function updateThemeButtonText() {
  if (document.body.classList.contains("dark")) {
    theme_toggle.textContent = "🌙 Switch to Light Mode";
  } else {
    theme_toggle.textContent = "☀️ Switch to Dark Mode";
  }
}

theme_toggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  updateThemeButtonText();
});

updateThemeButtonText();
