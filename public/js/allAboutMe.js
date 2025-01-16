document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const contentSections = document.querySelectorAll(".content-section");

  function setActiveTab(tabId) {
    navItems.forEach((item) => {
      item.classList.remove("bg-black");
      item.classList.add("bg-white/5");
    });
    contentSections.forEach((section) => {
      section.classList.remove("active");
    });

    const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
    const selectedSection = document.getElementById(tabId);

    if (selectedTab && selectedSection) {
      selectedTab.classList.remove("bg-white/5");
      selectedTab.classList.add("bg-black");
      selectedSection.classList.add("active");
    }
  }

  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const tabId = this.getAttribute("data-tab");
      setActiveTab(tabId);
    });
  });

  setActiveTab("skills");
});
