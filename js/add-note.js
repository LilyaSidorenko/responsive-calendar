var calendarItem  = document.getElementsByClassName('days__item');
var calendarFormExist = document.getElementById('add-note');

var addItem = function () {
    var calendarButton = document.getElementById('button');
    calendarButton.addEventListener('click',  function () {
        var calendarValue = document.getElementById('textarea');

        calendarFormExist.style.display = 'none';

        var newItem = document.createElement('p');
        newItem.classList.add('days__point');
        this.parentNode.parentNode.appendChild(newItem);
        newItem.innerHTML = calendarValue.value;
        calendarValue.value = '';

    });

};
for(var i = 0; i < calendarItem.length; i++) {
    calendarItem[i].addEventListener('click',  function (e) {
        if(e.target != this) return;

        calendarFormExist.style.display = 'block';
        this.appendChild(calendarFormExist);
    })
}
addItem();


