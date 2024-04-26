// owner.js

const form = document.getElementById('pg-info-form');
const submitButton = document.getElementById('submit-btn');

form.addEventListener('submit', function(event) {

  const addressInput = document.getElementById('pg-address');
  const availableRoomsInput = document.getElementById('available-rooms');
  
  if (addressInput.value.trim() === '') {
    alert('Please enter the PG address.');
    event.preventDefault(); 
  }

  if (availableRoomsInput.value === '' || isNaN(availableRoomsInput.value) || availableRoomsInput.value < 1) {
    alert('Please enter a valid number of available rooms (minimum 1).');
    event.preventDefault(); 
    return;
  }

 
  submitButton.disabled = true; 
  submitButton.innerText = 'Submitting...';  
});

