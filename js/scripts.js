/*!
*  Sanmart  -  Sanmart  v7.0.2 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2021  Sanmart 
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
