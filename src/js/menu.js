export const menuFunc = () => {
  const menu = document.querySelector(".navbar-nav");
  const menuBtn = document.querySelector(".menu-icon");
  const body = document.body;

  if (menu && menuBtn) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("active");
      menuBtn.classList.toggle("active");
      body.classList.toggle("lock");
    });

    document.addEventListener("keyup", (e) => {
      if (e.code === "Escape") {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
        body.classList.remove("lock");
      }
    });

    menu.querySelectorAll(".navbar-link").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
        body.classList.remove("lock");
      });
    });
  }

};

/* menuFunc(); */