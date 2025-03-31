

  document.addEventListener("DOMContentLoaded", function () {
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach((collapsible) => {
      collapsible.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  });



function scrollEffect() {
    const container = document.querySelector(".scroll-container");
    container.scrollBy({ left: 100, behavior: "smooth" }); // Increase scroll amount
  
    // Check if the scroll has reached the end
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    }
  }
  

  // Add an event listener for the scroll event on the window object
  window.addEventListener("scroll", () => {
    // Check if the user is scrolling vertically
    if (window.scrollY > 0) {
      scrollEffect();
    }
  });
  
  console.log("Scrolling text...");

  