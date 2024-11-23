
  const menuIcon = document.getElementById("menu-icon");
  const sidebar = document.querySelector(".sidebar");
  const backdrop = document.querySelector(".backdrop");

  // Open the sidebar and show the backdrop
  menuIcon.addEventListener("click", () => {
    sidebar.classList.add("visible");
    backdrop.classList.add("visible");
  });

  // Close the sidebar when the backdrop is clicked
  backdrop.addEventListener("click", () => {
    sidebar.classList.remove("visible");
    backdrop.classList.remove("visible");
  });

  // index.js

  // Select the "Digital Campus" grid item
  const digitalCampusButton = document.querySelector(".grid-item:nth-child(1)");

  // Add a click event listener
  digitalCampusButton.addEventListener("click", () => {
    // Redirect to the Digital Campus page
    window.location.href = "profile.html";
  });

