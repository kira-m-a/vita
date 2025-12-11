document.addEventListener('DOMContentLoaded', function() {
    // 1. Функционал фильтров
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const dropdown = this.closest('.filter-dropdown');
            dropdown.classList.toggle('active');
        });
    });
    
    document.addEventListener('click', function() {
        document.querySelectorAll('.filter-dropdown.active').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });
    
    document.querySelectorAll('.filter-menu').forEach(menu => {
        menu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    // Кнопка сброса фильтров
    const resetFiltersBtn = document.getElementById('resetFilters');
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', function() {
            const checkboxes = document.querySelectorAll('.filter-menu input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
        });
    }
});