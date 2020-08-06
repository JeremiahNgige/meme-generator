function fileSelect(event) {
    let file = event.target.files[0];

    let reader = new FileReader();
    reader.onload = function(fileObject) {
        let data = fileObject.target.result;

        // Create an image object
        let image = new Image();
        image.onload = function() {

            window.imageSrc = this;
            redrawMeme(window.imageSrc, null, null);
        }

        // Set image data to background image.
        image.src = data;
        console.log(fileObject.target.result);
    };
    reader.readAsDataURL(file)
}

window.topLineText = "";
window.bottomLineText ="";
let input1 = document.getElementById('topLineText');
let input2 = document .getElementById('bottomLineText');
input1.oninput = textChangeListener;
input2.oninput = textChangeListener;
document.getElementById('file').addEventListener('change',fileSelect, false);

function textChangeListener (event){
    let id = event.target.id;
    let text = event.target.value;

    if (id == "topLineText"){
        window.topLineText = text;
    }
    else {
        window.bottomLineText = text;
    }
    redrawMeme(window.imageSrc, window.topLineText, window.bottomLineText);

}

function redrawMeme(image,topLine,bottomLine) {
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext("2d");
    if (image!=null){
        context.clearRect(0,0,canvas.width,canvas.height)
        context.drawImage(image,0,0,canvas.width,canvas.height);
    }

    context.font = "36pt Sans-serif";
    context.textAlign = "center";
    context.fillStyle = "white";
    context.strokeStyle = "black";
    context.lineWidth = "3";


    if (topLine!=null){
        context.fillText(topLine,canvas.width/2,50);
        context.strokeText(topLine,canvas.width/2,50);
    }

    if (bottomLine!=null){
        context.fillText(bottomLine,canvas.width/2,canvas.height-20);
        context.strokeText(bottomLine,canvas.width/2,canvas.height-20);
    }


}

