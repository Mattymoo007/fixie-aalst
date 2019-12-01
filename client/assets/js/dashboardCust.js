$(document).ready(function () {
    var user = JSON.parse(localStorage.getItem('user'));
    $("#user").append(`ID: ${user.custID} <br> name: ${user.name}`)
});