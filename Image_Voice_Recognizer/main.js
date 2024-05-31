function startClassification() {
    navigator.mediaDevices.getUserMediaMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cntImDC2V/.json' , modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}