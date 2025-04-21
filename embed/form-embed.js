// form-embed.js
(function() {
  var iframe = document.createElement("iframe");
  iframe.src = "https://barrierefreiplus.de/formular?user_source=zarenga123";
  iframe.style.width = "100%";
  iframe.style.border = "0";
  iframe.onload = function () {
    window.addEventListener("message", function(event) {
      if (event.data && event.data.height) {
        iframe.style.height = event.data.height + "px";
      }
    });
  };
  document.getElementById("bfp-leadstrecke").appendChild(iframe);
})();
