// init counter library
new PureCounter({
  separator: true,
});

// fixed nav on scroll
const fixNav = () => {
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

const showScrollTop = ()=>{

  if(window.scrollY > 600) scrollTopBtn.classList.remove('hide')
  else scrollTopBtn.classList.add('hide')
}

const navbar = document.querySelector(".fixed-navbar");
const navbarHeight = window.getComputedStyle(navbar).height;
const scrollTopBtn = document.querySelector('.scrollTop');

document.addEventListener("scroll", () => {
  fixNav();
  showScrollTop();
});
