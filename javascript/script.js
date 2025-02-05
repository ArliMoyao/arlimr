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