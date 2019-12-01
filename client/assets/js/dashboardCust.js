$(document).ready(function () {
    var user = localStorage.getItem('user');
    console.log('user information in local storage: ', JSON.parse(user));
    var theUser = JSON.parse(user);
    $("#user").append(`ID: ${theUser.user.custID} <br> name: ${theUser.user.name}`)
});