export const handleScroll = () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute("id");

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      setActiveNav(`#${sectionId}`);

      navLinks.current.forEach((link) => {
        link.classList.remove("active");
      });

      const menuButton = document.querySelector(`[href="#${sectionId}"]`);
      if (menuButton) {
        menuButton.classList.add("active");
      }
    }
  });
};