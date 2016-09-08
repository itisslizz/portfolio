$(document).foundation();


var born = new Date('09/04/1989');
var now = new Date();
var age = now.getFullYear() - born.getFullYear();
$('#age').text(age + " years");
