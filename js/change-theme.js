var changeThemeButton = document.getElementById('theme');
var calendar = document.getElementById('calendar');
changeThemeButton.addEventListener('click', function () {
    var attr = this.getAttribute('data-theme');
    calendar.classList.toggle('calendar_'+attr);

    // attr = 'light-theme';
    //  this.setAttribute('data-theme', attr);

});