$(document).ready(function () {
  var apiUrl = 'http://worldclockapi.com/api/json/est/now';
  fetch(apiUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => {

    return response.json();
  }).then(data => {
    // Work with JSON data here
    var pa = data.ordinalDate;
    var arrr = pa.split("-");


    var mydate = data.currentDateTime;

    var arr = mydate.split('-', 2);

    document.getElementById("month").innerHTML = arr[1];
    document.getElementById("year").innerHTML = arrr[0];
    document.getElementById("date").innerHTML = arrr[1];

    var month = arr[1];
    var date = arrr[1];
    var year = arrr[0];

    var apiUrlM = 'http://numbersapi.com/' + month;
    fetch(apiUrlM, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json'
      }
    }).then(response => {
      return response.text();
    }).then(data3 => {
      document.getElementById("monthText").innerHTML = data3;
    });

    var apiUrlD = 'http://numbersapi.com/' + date;
    fetch(apiUrlD, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json'
      }
    }).then(response => {
      return response.text();
    }).then(data4 => {
      document.getElementById("dateText").innerHTML = data4;
    });


    var apiUrlY = 'http://numbersapi.com/' + year;

    fetch(apiUrlY, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json'
      }
    }).then(response => {
      return response.text();
    }).then(data5 => {
      document.getElementById("yearText").innerHTML = data5;
    });



  }).catch(err => {

  });



  function getsearch() {
    var input = document.getElementById("bingsearch").value;
    window.location = 'https://www.bing.com/search?q=' + input;
  }
  $("#copyright").html('@ Microsoft ' + new Date().getFullYear());
});