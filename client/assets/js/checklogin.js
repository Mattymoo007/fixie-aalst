// $(document).ready(function () {

function checkLogin(mail, pswd) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ email: mail, password: pswd });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch('http://localhost:9000/api/login.php', requestOptions)
        .then(response => {
            return response.json();
        })
        .then(result => {
            localStorage.setItem('user', JSON.stringify(result.user));
            return result;
        })
        .catch(error => {
            console.log('error', error);
        });
}
// });