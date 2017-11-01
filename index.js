var newDiv = document.createElement("a"); 
var newContent = document.createTextNode(" | Can't find what you want? Let Us Google That For You"); 
var searchStr = decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent('q').replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
newDiv.setAttribute('href', "http://youtube.com/?q=" + searchStr)
newDiv.setAttribute('target', "_blank")
newDiv.appendChild(newContent)
document.getElementById('resultStats').appendChild(newDiv)