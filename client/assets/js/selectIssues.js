$(document).ready(function() {
  // todo: fetch this data from the database
  const issues = [
    { description: "flat tyre", class: "tyre", time: 30, cost: 50 },
    { description: "breaks", class: "breaks", time: 60, cost: 100 },
    { description: "fix my whole bike", class: "whole", time: 180, cost: 200 }
  ];

  // show the issues as select
  let selects = "";
  issues.forEach(issue => {
    selects += `<option>${issue["description"]}</option>hello`;
  });
  $("#selectIssue").append(selects);


  $('plus').
   
});
