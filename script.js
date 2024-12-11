document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from projects.json
  fetch("projects.json")
    .then((response) => response.json())
    .then((data) => {
      // Target the project container in HTML
      const projectContainer = document.querySelector(".project-list");

      // Loop through the data and create HTML dynamically
      data.forEach((project) => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        // Create the project HTML structure
        projectElement.innerHTML = `
                    <h2>${project.name}</h2>
                    <p>${project.description}</p>
                    <img src="${project.image}" alt="${project.name}" />
                `;

        // Append to the project list
        projectContainer.appendChild(projectElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
});
