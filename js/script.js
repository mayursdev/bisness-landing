// init counter library
new PureCounter({
  separator: true,
});

// fixed nav on scroll
const fixNav = (e) => {
  const thresh = navbarHeight.split("px")[0] * 2;
  const currentScrollAt = window.scrollY;
  console.log({
    currentScrollAt,
    navbarHeight,
    thresh,
  });
  if (currentScrollAt >= thresh) {
    navbar.classList.add("navbar-is-fixed");
    document.body.style.paddingTop = `${navbarHeight}`;
  } else {
    navbar.classList.remove("navbar-is-fixed");
    document.body.style.paddingTop = `0px`;
  }
};

const navbar = document.querySelector(".fixed-navbar");
const navbarHeight = window.getComputedStyle(navbar).height;

document.addEventListener("scroll", fixNav);
