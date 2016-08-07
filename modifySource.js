// set webapge color
document.body.style.backgroundColor="lightblue"

// add style tag into head
var css = ".button-tts {font-size:1em; color:black; width:100px; height:35px; border-radius:2px; background-color: transparent; border: 1px solid black;}",
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
head.appendChild(style);

// add script tag into head
rs = document.createElement('script');
rs.src = "http://code.responsivevoice.org/responsivevoice.js";
document.getElementsByTagName('head')[0].appendChild(rs);

// filter out keywords
var kwords = ["Password", "Credit Card", "Sex", "Badge"]; 
var word = "";
for (i in kwords) {
	var kw = kwords[i];
	var tts = "<button class=\"button-tts\" onclick='responsiveVoice.speak(\"" + kw + "\");'>******</button>";
	console.log(kw);
	document.body.innerHTML = document.body.innerHTML.replace(kw, tts);
}



