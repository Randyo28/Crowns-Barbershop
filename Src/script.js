// Navigation and booking modal elements shared by both HTML entry points.
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let selectedLocation = '';
let selectedBarber = '';

// Contact records. Tim's Lindenwood number is confirmed; replace remaining placeholders when available.
const locationPhones = {
  Lindenwood: '+15551234567',
  Nostrand: '+15559876543'
};

const barberPhones = {
  Tim: '+13476834575',
  Jay: '+15552010848',
  Chris: '+15552010849'
};

// Booking modal step IDs, used to switch the visible part of the flow.
const steps = ['location-step', 'barber-step', 'confirm-step'];

// Keeps the mobile menu's visual and ARIA state in sync.
function setMobileMenu(open) {
  document.querySelector('nav').classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileMenu.setAttribute('aria-hidden', String(!open));
}

// Shows one booking step while hiding the other steps.
function showStep(id) {
  steps.forEach(step => document.getElementById(step).classList.toggle('active', step === id));
}

// Restores the regular location-booking copy after a direct barber contact view.
function resetConfirmCopy() {
  document.getElementById('confirm-title').textContent = 'Send your request.';
  document.getElementById('confirm-instructions').textContent = 'Call us to request an appointment, or send a text with your details already included. Add your preferred date and time before sending.';
  document.getElementById('confirm-back').style.display = '';
}

// Opens the location-first booking flow from header, hero, and location buttons.
function openBooking(location = '', barber = '') {
  selectedLocation = location;
  selectedBarber = barber;
  resetConfirmCopy();
  document.getElementById('booking').classList.add('show');

  if (selectedLocation && selectedBarber) {
    buildMessage();
    showStep('confirm-step');
  } else if (selectedLocation) {
    showStep('barber-step');
  } else {
    showStep('location-step');
  }
}

function closeBooking() {
  document.getElementById('booking').classList.remove('show');
}

function chooseLocation(location) {
  selectedLocation = location;
  if (selectedBarber) {
    buildMessage();
    showStep('confirm-step');
  } else {
    showStep('barber-step');
  }
}

function chooseBarber(barber) {
  selectedBarber = barber;
  buildMessage();
  showStep('confirm-step');
}

// Builds location-specific Call and SMS actions after a customer makes both choices.
function buildMessage() {
  resetConfirmCopy();
  const phone = locationPhones[selectedLocation] || locationPhones.Lindenwood;
  const message = `Hi Crowns! I'd like to book an appointment.\n\nLocation: ${selectedLocation}\nBarber: ${selectedBarber}\nService: Haircut\nPreferred date: \nPreferred time: `;

  document.getElementById('summary').innerHTML = `<b>Location:</b> ${selectedLocation}<br><b>Barber:</b> ${selectedBarber}<br><b>Service:</b> Haircut`;
  document.getElementById('call').href = `tel:${phone}`;
  document.getElementById('sms').href = `sms:${phone}?body=${encodeURIComponent(message)}`;
}

// Opens direct Call and SMS actions for an individual roster barber.
function openBarberContact(barber) {
  selectedBarber = barber;
  const phone = barberPhones[barber];
  const message = `Hi ${barber}! I'd like to book an appointment.\n\nService: Haircut\nPreferred date: \nPreferred time: `;

  document.getElementById('confirm-title').textContent = `Contact ${barber}.`;
  document.getElementById('confirm-instructions').textContent = `Call ${barber} directly, or send a text with your appointment details. Add your preferred date and time before sending.`;
  document.getElementById('confirm-back').style.display = 'none';
  document.getElementById('summary').innerHTML = `<b>Barber:</b> ${barber}<br><b>Service:</b> Haircut`;
  document.getElementById('call').href = `tel:${phone}`;
  document.getElementById('sms').href = `sms:${phone}?body=${encodeURIComponent(message)}`;
  document.getElementById('booking').classList.add('show');
  showStep('confirm-step');
}

// Event listeners: menu toggle, section navigation, modal backdrop, and Escape key.
menuToggle.addEventListener('click', () => {
  setMobileMenu(!document.querySelector('nav').classList.contains('menu-open'));
});

mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMobileMenu(false)));
document.getElementById('booking').addEventListener('click', event => {
  if (event.target.id === 'booking') closeBooking();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    setMobileMenu(false);
    closeBooking();
  }
});
