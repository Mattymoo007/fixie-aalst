$(document).ready(function () {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    $("#loginButton").on("click", (event) => {
        event.preventDefault();
        $(".loginForm #error").empty();

        // testvalues: p.ginneberge@gmail.com en 123456
        let mail = $("#loginemail").val();
        let pswd = $("#loginpassword").val();

        var raw = JSON.stringify({ email: mail, password: pswd });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch('http://localhost:9000/api/login.php', requestOptions)
            .then(response => {
                return response.json();
            })
            .then(result => {
                if (result.user) {
                    localStorage.setItem('user', JSON.stringify(result));
                    if (location.href.split('/').pop() == "index.html") {
                        window.location.replace("./customer.html");
                    }
                } else {
                    $(".loginForm #error").append(result.message);
                    // console.log(result.message);

                }
            })
            .catch(error => {
                console.log('error', error);
            });

    });

});