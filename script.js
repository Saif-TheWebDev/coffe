const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

let cartCount = 0;
let toastTimer;
const cartCountElement = document.querySelector('.cart-count');
const cartButton = document.querySelector('.cart-button');
const toast = document.querySelector('.toast');
document.querySelectorAll('.add-button').forEach(button => button.addEventListener('click', () => {
  cartCount += 1;
  cartCountElement.textContent = cartCount;
  cartButton.setAttribute('aria-label', `Shopping bag, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`);
  toast.textContent = `${button.dataset.product} added to your bag — good choice.`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}));

document.querySelector('.newsletter-form').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.querySelector('#email');
  document.querySelector('.form-message').textContent = `You're on the list. Look out for a little good at ${email.value}.`;
  email.value = '';
});
