Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camara = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshots()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 verson:', ml5.verson);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
