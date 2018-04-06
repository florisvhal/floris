window.onload = function () {
	     alert('deze site werkt het beste in mozilla firefox of google chrome');
	     alert ('Welkom op mijn site, op deze site kan je verschillende muziekstijlen beluisteren.\nDaarna kan je op de button onder de nummers klikken om advies te krijgen door aan te geven of je de stijl leuk vind.');
		 }
/* Basis gebruikt van W3Schools: https://www.w3schools.com/howto/howto_js_full_page_tabs.asp */

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}

// van mijzelf
function rating (){
var r = confirm("klik op OK als je deze nummers leuk vind");
if (r == true) {
    x = "hier heb ik nog wat nummers: http://spoti.fi/2nYPMVU (the passenger van Iggy pop raad ik aan)";
} else {
    x = "misschien kan je bijvoorbeeld EDM proberen";
}
alert (x);

}
function ratingEDM (){
var r = confirm("klik op OK als je deze nummers leuk vind");
if (r == true) {
    x = "hier heb ik nog wat nummers: http://spoti.fi/2mOqR6n (all falls down van Alan Walker en Noah Cyrus is een aanrader)";
} else {
    x = "misschien kan je bijvoorbeeld rap proberen";
}
alert (x);
}

function ratingindiepop (){
var r = confirm("klik op OK als je deze nummers leuk vind");
if (r == true) {
    x = "hier heb ik nog wat nummers: http://spoti.fi/2pIff54 (little talks van Of monster and men vind ikzelf een goed nummer)";
} else {
    x = "misschien kan je bijvoorbeeld 70s proberen";
}
alert (x);
}

function ratingrap (){
var r = confirm("klik op OK als je deze nummers leuk vind");
if (r == true) {
    x = "hier heb ik nog wat nummers: http://spoti.fi/2C9kVcl (HUMBLE. van Kendrick Lamar zou ik mee beginnen)";
} else {
    x = "misschien kan je bijvoorbeeld de 70s proberen";
}
alert (x);
}

