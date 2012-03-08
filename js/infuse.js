chrome.extension.sendRequest({name: "getStorage"},	function (result) {
  var src = result.preferences["site"];
  var swishandflick = 'konami = new Konami();konami.pattern = "4545";konami.code = function() {$("#invisiblitycloak").toggle();};konami.load();'
    
  var koi = document.createElement("script");
  koi.type = 'text/javascript';
  koi.src = chrome.extension.getURL("js/konami.js");
  document.getElementsByTagName("head")[0].appendChild(koi);

  $(document).ready(function() {
    var script = document.createElement("script");
    var text = document.createTextNode(swishandflick);
    script.appendChild(text);
    document.getElementsByTagName("head")[0].appendChild(script);

    $('BODY').prepend('<div id="invisiblitycloak" style="display:none;width:100%;height:100%;position:fixed;z-index:1000000;"><iframe allowtransparency="false" frameborder="0" width="100%" height="100%" src="'+src+'"></iframe></div>');
  });
});

