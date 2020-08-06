function fileSelect(event) {
    let file = event.target.files[0];

    let reader = new FileReader();
    reader.onload = function(fileObject) {
        let data = fileObject.target.result;

        // Create an image object
        let image = new Image();
        image.onload = function() {

            window.imageSrc = this;
            redrawMeme(window.imageSrc, null, null,null,null);
        }

        // Set image data to background image.
        image.src = data;
        console.log(data);
    };
    reader.readAsDataURL(file)
}
window.fontColor= "";
window.topLineText = "";
window.bottomLineText ="";
window.fontSize;

let input1        = document.getElementById('topLineText');
let input2        = document.getElementById('bottomLineText');
let inputSize     = document.getElementById('fontSize');
let inputColor    = document.getElementById('fontColor');
let buttonSave    = document.getElementById('saveBtn');

input1.oninput    = textChangeListener;
input2.oninput    = textChangeListener;
inputSize.oninput = textChangeListener;
inputColor.onchange= textChangeListener;

document.getElementById('file').addEventListener('change',fileSelect, false);

function textChangeListener (event){
    let id = event.target.id;
    let text = event.target.value;
    let indexnu = event.target.selectedIndex;

    if (id == "topLineText"){
        window.topLineText = text;   
    }
    else if(id == "bottomLineText"){
        window.bottomLineText = text;
    }
    else if(id == "fontSize"){
        window.fontSize = text;
    } 
    else {
        switch(indexnu){
            case 0:
                window.fontColor = text;
            break;
            case 1:
                window.fontColor = text;
            break;
            case 2:
                window.fontColor =text;
            break;
            case 3:
                window.fontColor =text;
            break;
            case 4:
                window.fontColor =text;
            break;
            case 5:
                window.fontColor =text;    
            break ;
            case 6:
                window.fontColor =text;
            break;
            default:
                window.fontColor ="white";
        }
                           
          }
    

    redrawMeme(window.imageSrc, window.topLineText, window.bottomLineText,window.fontColor,window.fontSize);

}

function redrawMeme(image,topLine,bottomLine,fontColor,fontSize) {
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

    
    ctx.font =  fontSize +"pt Sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = fontColor;
    ctx.strokeStyle = "black";
    ctx.lineWidth = "2";

}

buttonSave.onclick = function saveFile() {
    window.open(document.querySelector('canvas').toDataURL().replace("image/png", "image/octet-stream"));
    
 }
 //var image = document.querySelector('canvas').toDataURL("image/png").replace("image/png", "image/octet-stream");  
     //window.location.href=image;