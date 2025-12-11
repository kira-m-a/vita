// document.addEventListener('DOMContentLoaded', function() {
//     const recordForm = document.getElementById('recordForm');
//     const directionSelect = document.getElementById('directionSelect');
//     const dateInput = document.getElementById('dateInput');
//     const timeInput = document.getElementById('timeInput');
//     const errorContainer = document.getElementById('errorContainer');
//     const errorMessage = document.getElementById('errorMessage');
//     const successOverlay = document.getElementById('successOverlay');
//     const closeSuccessBtn = document.getElementById('closeSuccessBtn');
    
//     directionSelect.value = '';
//     dateInput.value = '';
//     timeInput.value = '';
    
//     function showError(message) {
//         errorMessage.textContent = message;
//         errorContainer.style.display = 'block';
        
//         if (!directionSelect.value) {
//             directionSelect.parentElement.classList.add('invalid');
//         }
//         if (!dateInput.value) {
//             dateInput.parentElement.classList.add('invalid');
//         }
//         if (!timeInput.value) {
//             timeInput.parentElement.classList.add('invalid');
//         }
//     }
    
//     function hideError() {
//         errorContainer.style.display = 'none';
//         const fields = document.querySelectorAll('.field');
//         fields.forEach(field => field.classList.remove('invalid'));
//     }
    
//     function showSuccessModal() {
//         successOverlay.style.display = 'flex';
//     }
    
//     function hideSuccessModal() {
//         successOverlay.style.display = 'none';
//         const modalRecord = document.getElementById('modal_record');
//         if (modalRecord) {
//             modalRecord.checked = false;
//         }

//         recordForm.reset();
//         directionSelect.value = '';
//         dateInput.value = '';
//         timeInput.value = '';
//     }
    
//     if (recordForm) {
//         recordForm.addEventListener('submit', function(e) {
//             e.preventDefault();
//             hideError();
            
//             if (!directionSelect.value) {
//                 showError('❌ Пожалуйста, выберите направление');
//                 directionSelect.focus();
//                 return;
//             }
            
//             if (!dateInput.value) {
//                 showError('❌ Пожалуйста, выберите дату');
//                 dateInput.focus();
//                 return;
//             }
            
//             if (!timeInput.value) {
//                 showError('❌ Пожалуйста, выберите время');
//                 timeInput.focus();
//                 return;
//             }
            
//             showSuccessModal();
//         });
//     }
    
//     if (closeSuccessBtn) {
//         closeSuccessBtn.addEventListener('click', function() {
//             hideSuccessModal();
//         });
//     }
    
  
// });


document.addEventListener('DOMContentLoaded', function() {
    const recordForm = document.getElementById('recordForm');
    const successOverlay = document.getElementById('successOverlay');
    const closeSuccessBtn = document.getElementById('closeSuccessBtn');
    
    function showSuccessModal() {
        successOverlay.style.display = 'flex';
    }
    
    function hideSuccessModal() {
        successOverlay.style.display = 'none';
        const modalRecord = document.getElementById('modal_record');
        if (modalRecord) {
            modalRecord.checked = false;
        }

        if (recordForm) {
            recordForm.reset();
        }
    }
    
    if (recordForm) {
        recordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showSuccessModal();
        });
    }
    
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', function() {
            hideSuccessModal();
        });
    }
});