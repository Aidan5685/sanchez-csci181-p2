const projects = [
  {
    title: "Weather Dashboard",
    image_label: "Weather Dashboard Preview",
    details:
      "This project is intended to solve the problem of quickly checking current weather conditions without digging through cluttered interfaces. It uses HTML, CSS, and JavaScript to display live forecast data in a simple and readable layout.",
    link_text: "View Project",
    href: "#",
  },
  {
    title: "Study Planner",
    image_label: "Study Planner Preview",
    details:
      "This project is designed to help students manage assignments, deadlines, and study priorities in one place. It focuses on organization, clarity, and reducing the stress of keeping track of multiple classes.",
    link_text: "View Project",
    href: "#",
  },
  {
    title: "Budget Tracker",
    image_label: "Budget Tracker Preview",
    details:
      "This project is meant to solve the problem of casually losing track of spending. It gives users a simple way to view expenses, savings goals, and overall budget habits with an interface that is easy to scan.",
    link_text: "View Project",
    href: "#",
  },
  {
    title: "Portfolio Website",
    image_label: "Portfolio Website Preview",
    details:
      "This project is intended to present skills and projects in a way that is clear for employers and internship applications. The goal is fast scanning, clean structure, and a professional first impression.",
    link_text: "View Project",
    href: "#",
  },
  {
    title: "Road Trip Planner",
    image_label: "Road Trip Planner Preview",
    details:
      "This project solves the problem of estimating road trip cost and fuel planning by calculating gallons needed, total cost, and gas stop points. It was built to practice JavaScript logic and real-world calculations.",
    link_text: "View Project",
    href: "#",
  },
  {
    title: "Theme Toggle UI",
    image_label: "Theme Toggle Preview",
    details:
      "This project is meant to improve the user experience by letting visitors switch between light and dark themes. It focuses on DOM manipulation, event handling, and making the interface feel more interactive.",
    link_text: "View Project",
    href: "#",
  },
];

const modal = document.querySelector("#project-modal");
const modal_title = document.querySelector("#modal-title");
const modal_details = document.querySelector("#modal-details");
const modal_link = document.querySelector("#modal-link");
const modal_close = document.querySelector("#modal-close");
const modal_image = document.querySelector("#modal-image");

const card_buttons = document.querySelectorAll(".project-card");

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
