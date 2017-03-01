navigator.getWebcam = (navigator.getUserMedia ||
						navigator.webkitGetUserMedia ||
						navigator.mozGetUserMedia ||
						navigator.msGetUserMedia);
navigator.getWebcam(
	{video: true, audio: false},
	gotWebcam,
	
	function (err){
		console.log("Oops! Something's not right." +err);
	}
);

function gotWebcam(stream){
	localVideo.src = window.URL.createObjectURL(stream);
	localVideo.play();
	
	var video_track = stream.getVideoTracks()[0];
	var output = document.getElementById('output');
	output.innerHTML = "stream id = " + stream.id + "<BR>";
	output.innerHTML += "track readyState = " + video_track.readyState + "<BR>";
	output.innerHTML += "track id = " + video_track.id + "<BR>";
	output.innerHTML += "kind = " + video_track.kind + "<BR>";
};