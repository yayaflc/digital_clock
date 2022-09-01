
// enviando a info para o front
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const info = document.getElementById('info');

const clock = setInterval(function time() {
    // definindo variavel de acordo com a função
    let dateToday = new Date();
    let day = dateToday.getDate();
    let month = dateToday.getMonth();
    let year = dateToday.getFullYear();
    let week = dateToday.getDay();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    var months = new Array ("January","February","March","April","May","June","July","August","September","October","November","December");
    var weeks = new Array ("Monday","Tuesday","","Wednesday","Thursday","Friday","Saturday","Sunday");

    if( hr < 10) hr = '0' + hr;
    if( min < 10) min = '0' + min;
    if( s < 10) s = '0' + s;

    // declarando o valor da variavel do textContent
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;

    info.textContent = (weeks[week] + ", " + months[month] + " " + day + ", " + year);


})
