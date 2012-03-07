function loadOptions() {
  document.getElementById("urlbox").value = localStorage["site"];
}


function saveOptions() {
  localStorage["site"] = document.getElementById("urlbox").value;
  
  $('.myButton').text('Option Saved');
  var t = setTimeout("$('.myButton').text('Save Options');", 2000)
}
