function validateEmail(email) {
   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
 }
 
 function handleInput() {
   var emailInput = document.getElementById('email').value;
   var emailError = document.getElementById('emailError');
 
   if (emailInput.trim() === '') {
     emailError.textContent = 'Email cannot be empty';
     emailError.style.display = 'block';
   } else if (validateEmail(emailInput)) {
     emailError.style.display = 'none';
   } else {
     emailError.textContent = 'Please provide a valid email';
     emailError.style.display = 'block';
   }
 }
 document.getElementById('email').addEventListener('input', handleInput);
 document.getElementById('email').addEventListener('focus', function() {
   document.getElementById('emailError').style.display = 'none';
 });
 document.getElementById('email').addEventListener('blur', handleInput);