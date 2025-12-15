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