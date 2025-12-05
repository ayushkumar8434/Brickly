let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Your property has been submitted.");
});