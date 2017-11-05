var newDiv = document.createElement("a");
var newContent = document.createTextNode(" | Can't find? Send to LUGTFY 🔗");
// var searchStr = decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent('q').replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
var searchStr = encodeURIComponent(document.getElementById("lst-ib").value);
newDiv.setAttribute(
  "href",
  "https://letusgogglethatforyou.firebaseapp.com/submit/" + searchStr
);
newDiv.setAttribute("target", "_blank");
newDiv.appendChild(newContent);
document.getElementById("resultStats").appendChild(newDiv);
