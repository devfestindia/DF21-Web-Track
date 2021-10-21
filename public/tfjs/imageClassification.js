const webcamElement = document.getElementById('webcam');
let startPrediction =  false;

async function app() {
  console.log('Loading mobilenet..');

  net = await mobilenet.load();
  console.log('Successfully loaded model');
  
  const webcam = await tf.data.webcam(webcamElement);
  while (true) {
    const img = await webcam.capture();
    const result = await net.classify(img);

    for(var i = 0 ; i < result.length ; i++ ) {
      res = result[i];
      if(res.probability > 0.5) {
        alert(res.className);
        location.reload();
        break;
      }
    }
    img.dispose();
    await tf.nextFrame();
  }
}

function openWebCam() {
  document.getElementById("webCamDisplay").style.display = "block";
}

function closeWebCamDisplay() {
  document.getElementById("webCamDisplay").style.display = "none";
}

function predictObject() {
  app();
}