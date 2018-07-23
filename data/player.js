manifestUri = "http://<website>/play/dash/stream/index.mpd";

var player = null;
var video = null;

function initApp() {
	// Install built-in polyfills to patch browser incompatibilities.
	shaka.polyfill.installAll();

	if (shaka.Player.isBrowserSupported()) {
		console.log("Browser supported!");
		initPlayer();
	} else {
		console.error('Browser not supported!');
	}
}

function initPlayer() {
	// Create a Player instance.
	video = document.getElementById('video');
	player = new shaka.Player(video);

	// Attach player to the window to make.
	window.player = player;

	// Listen for error events.
	player.addEventListener('error', onErrorEvent);
}

function startPlayer() {
	// Try to load a manifest.
	console.log("loading");
	player.load(manifestUri).then(function() {
			console.log('The video has now been loaded!');
			video.play();
		}, function() {
			console.log('Video not loaded');
		}).catch(onError);
}

function onErrorEvent(event) {
	onError(event.detail);
}

function onError(error) {
	console.error('Error code', error.code, 'object', error);
}

function streamStatus() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", manifestUri, true);
	xhr.onreadystatechange = function() {
		if (this.readyState == XMLHttpRequest.DONE) {
			console.log(this.status);
			if (this.status == 200) {
				startPlayer();
				clearInterval(streamListener);		
			}
		}
	}	
	xhr.send();
}

document.addEventListener('DOMContentLoaded', initApp);
var streamListener = window.setInterval(streamStatus, 1000);
