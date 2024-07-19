var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (var tablink of tablinks) {
    tablink.classList.remove("active");
  }
  for (var tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  document
    .querySelector(".tab-links[onclick=\"openTab('" + tabName + "')\"]")
    .classList.add("active");
  document.getElementById(tabName).classList.add("active-tab");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const sectionId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }

    // Close the menu on small screens after clicking a link
    if (window.innerWidth <= 768) {
      document.querySelector("nav ul").classList.remove("active");
    }
  });
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("active");
});
