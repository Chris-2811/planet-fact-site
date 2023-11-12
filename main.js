const navToggle = document.getElementById('mobile-nav-toggle');
const primaryNav = document.getElementById('primary-navigation');

// Add Eventlistener

navToggle.addEventListener('click', (e) => {
  console.log(e.currentTarget);
  if (e.currentTarget.getAttribute('aria-expanded') === 'false') {
    e.currentTarget.setAttribute('aria-expanded', 'true');
    primaryNav.setAttribute('data-visible', 'true');
  } else {
    e.currentTarget.setAttribute('aria-expanded', 'false');
    primaryNav.setAttribute('data-visible', 'false');
  }
});
