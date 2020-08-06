function fileSelect(event) {
    let file = event.target.files[0];

    let reader = new FileReader();
    reader.onload = function(fileObject) {
        let data = fileObject.target.result;

        // Create an image object
        let image = new Image();
        image.onload = function() {

            window.imageSrc = this;
            redrawMeme(window.imageSrc, null, null,null);
        }

        // Set image data to background image.
        image.src = data;
        console.log(data);
    };
    reader.readAsDataURL(file)
}

window.topLineText = "";
window.bottomLineText ="";
window.fontSize;
let input1 = document.getElementById('topLineText');
let input2 = document .getElementById('bottomLineText');
input1.oninput = textChangeListener;
input2.oninput = textChangeListener;
document.getElementById('file').addEventListener('change',fileSelect, false);
let inputSize = document.getElementById('fontSize');
inputSize.oninput = textChangeListener;

function textChangeListener (event){
    let id = event.target.id;
    let text = event.target.value;

    if (id == "topLineText"){
        window.topLineText = text;   
    }
    else if(id == "bottomLineText"){
        window.bottomLineText = text;
    }
    else if(id == "fontSize"){
        window.fontSize = text;
    }else{
          window.fontSize=50;
    }
    redrawMeme(window.imageSrc, window.topLineText, window.bottomLineText,window.fontSize);

}

function redrawMeme(image,topLine,bottomLine,fontSize) {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext("2d");
    if (image!=null){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.drawImage(image,0,0,canvas.width,canvas.height);
    }



    if (topLine!=null){
        ctx.fillText(topLine,canvas.width/2,50);
        ctx.strokeText(topLine,canvas.width/2,50);
    }

    if (bottomLine!=null){
        ctx.fillText(bottomLine,canvas.width/2,canvas.height-20);
        ctx.strokeText(bottomLine,canvas.width/2,canvas.height-20);
    }

    
    ctx.font =  fontSize +"px Sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = "3";

}
function fontChangeSize(event){
    
    
}

