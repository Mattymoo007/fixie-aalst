$(document).ready(function() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = "{\n	\"email\":\"p.ginneberge@gmail.com\",\n	\"password\":\"123456\"\n}";
    //  var raw = JSON.stringify({username:"p.ginneberge@gmail.com",  password:"123456"});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch('http://localhost:9000/api/login.php', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

});