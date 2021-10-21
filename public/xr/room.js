document.getElementById("closeVR").style.display = "none";
//Unset position on html to make page properly scollable.
document.getElementsByTagName('html')[0].style.position = "unset";

function openVirtualRoom() {
	document.getElementById("listContainer").style.display = "none";
	document.getElementById("vrRoomContainer").style.display = "block";
	document.getElementById("closeVR").style.display = "block";
	document.getElementById("openVR").style.display = "none";
}

function closeVirtualRoom() {
	document.getElementById("listContainer").style.display = "block";
	document.getElementById("vrRoomContainer").style.display = "none";
	document.getElementById("closeVR").style.display = "none";
	document.getElementById("openVR").style.display = "block";
}