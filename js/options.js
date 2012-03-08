function toBool(str) {
  if ("false" === str) return false;
  else return str;
}

function loadOptions() {
  var key = localStorage["hotkeys"];
  if (null != key) document.getElementById("hotkeys").checked = toBool(key);
  
  document.getElementById("urlbox").value = localStorage["site"];
}


function saveOptions() {
  localStorage["site"] = document.getElementById("urlbox").value;
  localStorage["hotkeys"] = document.getElementById("hotkeys").checked;
  
  $('.myButton').text('Option Saved');
  var t = setTimeout("$('.myButton').text('Save Options');", 2000)
}
