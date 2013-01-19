var context;
var source;
var analyser;
var buffer;
var audioBuffer;

var pc1;
var pc2;

var analyserView1;

function error () {
	alert('Stream generation failed.');
}

function getUserMedia(dictionary, callback) {
    try {
        navigator.webkitGetUserMedia(dictionary, callback, error);
    } catch (e) {
        alert('webkitGetUserMedia threw exception :' + e);
    }
}

function gotStream(stream) {
    s = stream;
    console.log(s);
    //analyserView1 = new AnalyserView("view1");

    initAudio(stream);
    //analyserView1.initByteBuffer();
}

function init() {
    getUserMedia({audio:true}, gotStream);
}

function initAudio(stream) {
    context = new webkitAudioContext();
    
    // analyser = context.createAnalyser();
    // analyser.fftSize = 2048;

    // Connect audio processing graph:
    // live-input -> analyser -> destination

    // Create an AudioNode from the stream.
    /*var socket = io.connect('http://immense-ridge-5275.herokuapp.com');

    socket.on('news', function (data) {
    console.log(data);*/

    var mediaStreamSource = context.createMediaStreamSource(stream);   
    //socket.emit('my other event', { my: 'data' }); 
   //mediaStreamSource.connect(context.destination);
    // analyser.connect(context.destination);

}
