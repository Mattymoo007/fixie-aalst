$(document).ready(function () {
    // console.log("the dom is ready");

    $('.description a').on('click', function () {
        $('#login .register').toggleClass('show');
        event.preventDefault();
    });




    // // toggle between login and registration on click and display the active link to the form as active
    // $('#login-form-link').click(function (e) {
    //     $("#login-form").delay(100).fadeIn(100);
    //     $("#register-form").fadeOut(100);
    //     $('#register-form-link').removeClass('active');
    //     $(this).addClass('active');
    //     e.preventDefault();
    // });
    // $('#register-form-link').click(function (e) {
    //     $("#register-form").delay(100).fadeIn(100);
    //     $("#login-form").fadeOut(100);
    //     $('#login-form-link').removeClass('active');
    //     $(this).addClass('active');
    //     e.preventDefault();
    // });
    // // end of toggle between login and registration on click and display the active link to the form as active

    // // toggle between the steps
    // function toggleBetweenSteps(out, enter) {
    //     $('.step' + enter).delay(200).fadeIn(100);
    //     $('.step' + out).fadeOut(100);
    //     $('.process li' + enter).addClass('active');
    //     $('.process li' + out).removeClass('active');
    // }
    // $('#login').click(function (e) {
    //     console.log("here we will need a function to check if login-values are correct");
    //     toggleBetweenSteps('.login', '.issue');
    // });
    // $('#register').click(function (e) {
    //     console.log("here we will need a function to check if the values and POST to the back and");
    //     toggleBetweenSteps('.login', '.issue');
    // });

    // $('.issue .back').click(function (e) {
    //     toggleBetweenSteps('.issue', '.login');
    // });
    // $('.issue .next').click(function (e) {
    //     console.log("here we will need a function to check if the bike information is filled in and if at least one value is selected");
    //     toggleBetweenSteps('.issue', '.date');
    // });
    // $('.date .back').click(function (e) {
    //     toggleBetweenSteps('.date', '.issue');
    // });
    // $('.date .next').click(function (e) {
    //     console.log('the calender is not there yet');
    //     toggleBetweenSteps('.date', '.summary');
    // });
    // $('.summary .back').click(function (e) {
    //     toggleBetweenSteps('.summary', '.issue');
    // });



});