const tabList = document.querySelector('[role = tablist]');
const tabs = document.querySelectorAll('[role=tab]');

// Change tab panel
function changeTabPanel(e) {
  const targetTab = e.currentTarget;
  const targetPanel = targetTab.getAttribute('aria-controls');
  const targetImage = targetTab.getAttribute('data-img');

  console.log(targetImage);

  const tabContainer = targetTab.parentElement;
  const mainContainer = tabContainer.parentElement.parentElement;

  tabList
    .querySelector('[aria-selected="true"]')
    .setAttribute('aria-selected', false);

  targetTab.setAttribute('aria-selected', true);

  const panels = mainContainer.querySelectorAll('[role="tabpanel"]');
  panels.forEach((panel) => {
    panel.setAttribute('hidden', true);
  });

  const images = mainContainer.querySelectorAll('.img');

  images.forEach((img) => {
    img.setAttribute('hidden', true);
  });

  mainContainer.querySelector(`#${targetImage}`).removeAttribute('hidden');

  const target = mainContainer.querySelector(`#${targetPanel}`);
  target.removeAttribute('hidden');
}

// Add Eventlistener
tabs.forEach((tab) => {
  tab.addEventListener('click', changeTabPanel);
});
