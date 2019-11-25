$( document ).ready(function() {
    console.log("the dom is ready");

    // on click of the register-button, show the register-fields
    $("#register").on("click", function(){
        $(".register").toggle( "slow" );
        $("#login").toggle( "slow" );
        
    });

    // $( "button" ).click(function() {
    //     $( "p" ).toggle( "slow" );
    //   });



  });