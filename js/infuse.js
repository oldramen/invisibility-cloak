chrome.extension.sendRequest({name: "getStorage"},	function (result) {
  function toBool(str) {
    if ("false" === str) return false;
    else return str;
  }
  
  var src = result.preferences["site"];
  var key = toBool(result.preferences["hotkeys"]);
  var swishandflick = 'konami = new Konami();konami.pattern = "4545";konami.code = function (){var e = document.getElementById("invisiblitycloak");if(e.style.display == "block") {e.style.display = "none";} else {e.style.display = "block";}; };konami.load();';
  
  if (key) {
    var koi = document.createElement("script");
    koi.type = 'text/javascript';
    koi.src = chrome.extension.getURL("js/konami.js");
    document.getElementsByTagName("head")[0].appendChild(koi);
  };
  
  $('BODY').prepend('<div id="invisiblitycloak" style="display:none;width:100%;height:100%;position:fixed;z-index:1000000;"><iframe allowtransparency="false" frameborder="0" width="100%" height="100%" src="'+src+'"></iframe></div>');
  
  $(document).ready(function() {
    if (key) {   
      var script = document.createElement("script");
      var text = document.createTextNode(swishandflick);
      script.appendChild(text);
      document.getElementsByTagName("head")[0].appendChild(script);
    };
  });
});

