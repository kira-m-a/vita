// document.addEventListener('DOMContentLoaded', function() {

//     function setErrorStyle(input) {
//         input.style.backgroundColor = '#ffe6e6';
//         input.style.border = '2px solid #ff3b30';
//     }

//     function clearErrorStyle(input) {
//         input.style.border = '';
//         input.style.backgroundColor = '';
//     }

//     function validateEmail(email) {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(email);
//     }

//     const regForm = document.querySelector('.form-r form');
//     if (regForm) {
//         regForm.addEventListener('submit', function(e) {
//             let hasError = false;
//             let errorMessage = '';
            
//             const fields = {
//                 email: this.querySelector('input[placeholder="Почта"]'),
//                 login: this.querySelector('input[placeholder="Логин"]'),
//                 password: this.querySelector('input[placeholder="Пароль"]'),
//                 confirm: this.querySelector('input[placeholder="Повторите пароль"]')
//             };

//             Object.values(fields).forEach(field => {
//                 if (field) clearErrorStyle(field);
//             });
            
//             const errorContainer = this.querySelector('.error-container');
//             if (errorContainer) {
//                 errorContainer.style.display = 'none';
//             }

//             if (fields.email) {
//                 const emailValue = fields.email.value.trim();
//                 if (!emailValue) {
//                     setErrorStyle(fields.email);
//                     errorMessage = 'Введите email';
//                     hasError = true;
//                 } else if (!validateEmail(emailValue)) {
//                     setErrorStyle(fields.email);
//                     errorMessage = 'Введите корректный email';
//                     hasError = true;
//                 }
//             }

//             if (!hasError && fields.login) {
//                 const loginValue = fields.login.value.trim();
//                 if (!loginValue) {
//                     setErrorStyle(fields.login);
//                     errorMessage = 'Введите логин';
//                     hasError = true;
//                 } else if (loginValue.length < 2) {
//                     setErrorStyle(fields.login);
//                     errorMessage = 'Логин должен быть минимум 2 символа';
//                     hasError = true;
//                 }
//             }

//             if (!hasError && fields.password) {
//                 const passwordValue = fields.password.value.trim();
//                 if (!passwordValue) {
//                     setErrorStyle(fields.password);
//                     errorMessage = 'Введите пароль';
//                     hasError = true;
//                 } else if (passwordValue.length < 3) {
//                     setErrorStyle(fields.password);
//                     errorMessage = 'Пароль должен быть минимум 3 символа';
//                     hasError = true;
//                 }
//             }

//             if (!hasError && fields.confirm && fields.password) {
//                 const confirmValue = fields.confirm.value.trim();
//                 const passwordValue = fields.password.value.trim();
//                 if (!confirmValue) {
//                     setErrorStyle(fields.confirm);
//                     errorMessage = 'Повторите пароль';
//                     hasError = true;
//                 } else if (confirmValue !== passwordValue) {
//                     setErrorStyle(fields.confirm);
//                     errorMessage = 'Пароли не совпадают';
//                     hasError = true;
//                 }
//             }

//             if (!hasError) {
//                 const checkbox = this.querySelector('input[type="checkbox"]');
//                 if (checkbox && !checkbox.checked) {
//                     errorMessage = 'Необходимо согласие на обработку данных';
//                     hasError = true;
//                 }
//             }

//             if (hasError) {
//                 e.preventDefault();
                
//                 if (errorContainer && errorMessage) {
//                     const errorMessageElement = errorContainer.querySelector('.error-message');
//                     if (errorMessageElement) {
//                         errorMessageElement.textContent = errorMessage;
//                     }
//                     errorContainer.style.display = 'block';
//                 }
//             }
//         });

//         regForm.querySelectorAll('input').forEach(input => {
//             input.addEventListener('input', function() {
//                 clearErrorStyle(this);
//                 const errorContainer = regForm.querySelector('.error-container');
//                 if (errorContainer) {
//                     errorContainer.style.display = 'none';
//                 }
//             });
//         });
//     }

//     const authForm = document.querySelector('.form-a form');
//     if (authForm) {
//         authForm.addEventListener('submit', function(e) {
//             let hasError = false;
//             let errorMessage = '';

//             const login = this.querySelector('input[placeholder="Логин"]');
//             const password = this.querySelector('input[placeholder="Пароль"]');

//             if (login) clearErrorStyle(login);
//             if (password) clearErrorStyle(password);
            
//             const errorContainer = this.querySelector('.error-container');
//             if (errorContainer) {
//                 errorContainer.style.display = 'none';
//             }

//             if (login && !login.value.trim()) {
//                 setErrorStyle(login);
//                 errorMessage = 'Введите логин';
//                 hasError = true;
//             }

//             if (!hasError && password && !password.value.trim()) {
//                 setErrorStyle(password);
//                 errorMessage = 'Введите пароль';
//                 hasError = true;
//             }

//             if (hasError) {
//                 e.preventDefault();
                
//                 if (errorContainer && errorMessage) {
//                     const errorMessageElement = errorContainer.querySelector('.error-message');
//                     if (errorMessageElement) {
//                         errorMessageElement.textContent = errorMessage;
//                     }
//                     errorContainer.style.display = 'block';
//                 }
//             }
//         });

//         authForm.querySelectorAll('input').forEach(input => {
//             input.addEventListener('input', function() {
//                 clearErrorStyle(this);
//                 const errorContainer = authForm.querySelector('.error-container');
//                 if (errorContainer) {
//                     errorContainer.style.display = 'none';
//                 }
//             });
//         });
//     }

// });