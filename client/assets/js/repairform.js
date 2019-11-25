$( document ).ready(function() {
    console.log("the dom is ready");

    // toggle between login and registration on click and display the active link to the form as active
    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    // end of toggle between login and registration on click and display the active link to the form as active

    // toggle between the steps
    function toggleBetweenSteps(out, enter){
        $('.step'+enter).delay(100).fadeIn(100);
        $('.process li'+enter).addClass('active');
        $('.step'+out).fadeOut(100); 
        $('.process li'+out).removeClass('active');
    }

    $('#login').click(function(e){
        console.log("here we will need a function to check if login-values are correct");
        toggleBetweenSteps('.one', '.two'); 
    });
    $('#register').click(function(e){
        console.log("here we will need a function to check if the values and POST to the back and");
        toggleBetweenSteps('.one', '.two');
    });
    $('.two .back').click(function(e){
        toggleBetweenSteps('.two', '.one');
    });
    $('.two .next').click(function(e){
        toggleBetweenSteps('.two', '.three');
    });
    $('.three .back').click(function(e){
        toggleBetweenSteps('.three', '.two');
    });
    $('.three .next').click(function(e){
        toggleBetweenSteps('.three', '.four');
    });
    $('.four .back').click(function(e){
        toggleBetweenSteps('.four', '.three');
    });

    // end of toggle between the steps

    


  });