$(document).ready(function() {
  getBikeTypes();
});

/**
 * Fetches data for bike type.
 */
function getBikeTypes() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch("http://localhost:9000/api/getypebike.php", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      let selects = "";
      result.forEach(type => {
        selects += `<option value="${type.tbikeID}">${type.description}</option>`;
      });
      $("#selectIssue").append(selects);
    })
    .catch(error => console.log("error", error));
}
