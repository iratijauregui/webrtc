var room = location.search && location.search.split('?')[1];

var webrtc = new SimpleWebRTC({
	localVideoEl: 'localVideo',
	remoteVideosEl: 'remotes',
	autoRequestMedia: true,
	log: true
});

var val = $('#sessionInput').val().toLowerCase().replace(/\s/g, '-').replace(/[^A-Za-z0-9_\-]/g,'');
webrtc.createRoom(val, function(err,name) {
	var newUrl = location.pathname + '?' + name;
	if (!err) {
		history.replaceState({foo: 'bar'},null,newUrl);
		setRoom(name);
	}
});

webrtc.on('readyToCall', function(){
	if(room) webrtc.joinRoom(room);
});