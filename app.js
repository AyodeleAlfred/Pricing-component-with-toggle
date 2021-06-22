//SELECT ITEMS

const basicMonth = document.getElementById('basic-month');
const proMonth = document.getElementById('pro-month');
const masterMonth = document.getElementById('master-month');
const basicYear = document.getElementById('basic-year');
const proYear = document.getElementById('pro-year');
const masterYear = document.getElementById('master-year');
const btn = document.querySelector('.check-btn');

btn.addEventListener('change', function () {
    if (btn.checked) {
        basicMonth.style.display = 'block';
        proMonth.style.display = 'block';
        masterMonth.style.display = 'block';
        basicYear.style.display = 'none';
        proYear.style.display = 'none';
        masterYear.style.display = 'none';
    }
    else {
        basicMonth.style.display = 'none';
        proMonth.style.display = 'none';
        masterMonth.style.display = 'none';
        basicYear.style.display = 'block';
        proYear.style.display = 'block';
        masterYear.style.display = 'block';
    }
})