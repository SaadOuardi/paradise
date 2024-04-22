window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'black';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});


// document.querySelector('.bi-calendar').addEventListener('click', function() {
//     document.getElementById('date__input').focus();
//     console.log('it should be showed')
// });


console.log(screenX)