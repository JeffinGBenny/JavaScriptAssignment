document.addEventListener('DOMContentLoaded', function (
    ) {
        const form = document.getElementById('frmEmployee')
        const nameInput = document.getElementById('FullName');
        const emailInput = document.getElementById('Email');
        const phoneInput = document.getElementById('numPhone');
        const passwordInput = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
    
        const nameError = document.getElementById('FullNameError')
        const EmailError = document.getElementById('EmailError')
        const phoneError = document.getElementById('phoneError')
        const passwordError = document.getElementById('passwordError')
        const confirmPasswordError = document.getElementById('confirmPasswordError')
        
    
        
    
        
    
    
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Enter full name';
            }
            else {
                nameError.textContent = '';
            }
            if (!emailInput.value.trim()) {
                EmailError.textContent = 'Enter your email address';
            }
            else {
                EmailError.textContent = '';
            }
            if (!phoneInput.value.trim()||(phoneInput.toString()).length()!==10) {
                phoneError.textContent = 'Enter a phone number';
            }
            else {
                phoneError.textContent = '';
            }
            if (!passwordInput.value.trim()) {
                passwordError.textContent = 'Enter password';
            }
            else {
                passwordError.textContent = '';
            }
            if (!confirmPassword.value.trim()) {
                confirmPasswordError.textContent = 'Enter password confirmation';
            }
            else {
                confirmPasswordError.textContent = '';
            }
            
            if (confirmPassword.value!==passwordInput.value) {
                confirmPasswordError.textContent = 'Password confirmation do not match';
            }
            else {
                confirmPasswordError.textContent = '';
            }
    
        });
    
        
    
    
    });