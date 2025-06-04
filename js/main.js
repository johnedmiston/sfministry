'use strict';

const openMenuBtn = document.querySelector('#open-menu');

/**
 * toggleMobileMenu.
 *
 * open or close the mobile menu.
 * @return {null}
 *
 */
function toggleMobileMenu() {
  const state = openMenuBtn.getAttribute('data-state');

  if (!state || state === 'closed') {
    openMenuBtn.setAttribute('data-state', 'opened');
    openMenuBtn.setAttribute('aria-expanded', 'true');
  } else {
    openMenuBtn.setAttribute('data-state', 'closed');
    openMenuBtn.setAttribute('aria-expanded', 'false');
  }
}

openMenuBtn.addEventListener('click', toggleMobileMenu);
