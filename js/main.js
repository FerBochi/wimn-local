// tabs places
function openTab(evt, placeName) {
	var a, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (a = 0; a < tabcontent.length; a++) {
		tabcontent[a].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (a = 0; a < tablinks.length; a++) {
		tablinks[a].className = tablinks[a].className.replace(" active", "");
	}
	document.getElementById(placeName).style.display = "block";
	evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


// accordions
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	});
}


// tabs survey
function openSurvey(evts, surveyName) {
	var i, tabcontentsurvey, tablinksurvey;
	tabcontentsurvey = document.getElementsByClassName("tabcontentsurvey");
	for (i = 0; i < tabcontentsurvey.length; i++) {
		tabcontentsurvey[i].style.display = "none";
	}
	tablinksurvey = document.getElementsByClassName("tablinksurvey");
	for (i = 0; i < tablinksurvey.length; i++) {
		tablinksurvey[i].className = tablinksurvey[i].className.replace(" active", "");
	}
	document.getElementById(surveyName).style.display = "block";
	evts.currentTarget.className += " active";
}


// tabs section
function openSection(evts, sectionName) {
	var i, tabcontentsection, tablinksection;
	tabcontentsection = document.getElementsByClassName("tabcontentsection");
	for (i = 0; i < tabcontentsection.length; i++) {
		tabcontentsection[i].style.display = "none";
	}
	tablinksection = document.getElementsByClassName("tablinksection");
	for (i = 0; i < tablinksection.length; i++) {
		tablinksection[i].className = tablinksection[i].className.replace(" active", "");
	}
	document.getElementById(sectionName).style.display = "block";
	evts.currentTarget.className += " active";
}

function goBack(sectionName) {
	document.getElementById(sectionName).style.display = "none";
}
