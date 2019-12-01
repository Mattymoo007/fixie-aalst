$(document).ready(function () {
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // function checkLogin(mail, pswd) {
    //     var raw = JSON.stringify({ email: mail, password: pswd });

    //     var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };

    //     return fetch('http://localhost:9000/api/login.php', requestOptions)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(result => {
    //             localStorage.setItem('user', JSON.stringify(result.user));
    //             return result;
    //         })
    //         .catch(error => {
    //             console.log('error', error);
    //         });
    // }

    $("#loginButton").on("click", (event) => {
        event.preventDefault();
        $(".loginForm #error").empty();

        // testvalues: p.ginneberge@gmail.com en 123456
        let mail = $("#loginemail").val();
        let pswd = $("#loginpassword").val();

        checkLogin(mail, pswd)
            .then(result => {
                if (result.user) {
                    if (location.href.split('/').pop() == "index.html") {
                        window.location.replace("./customer.html");
                    }
                }
                else {
                    $(".loginForm #error").append(result.message);
                    console.log(result.message);
                }
            });;
    });

});