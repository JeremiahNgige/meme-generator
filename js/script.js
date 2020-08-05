const inpFile      = document.getElementById("inpFile");
var previewContainer = document.getElementById("imgPrev");
var img1           = new Image();
let topButton      = document.getElementById("btnTop");
let bottomButton   = document.getElementById("btnBottom");
var ctx = previewContainer.getContext('2d');

inpFile.addEventListener('change', function(){
     const file = this.files[0];
     console.log(file)
     if(file){
         const reader =new FileReader();

         reader.addEventListener('load', function(){
             console.log(this);
             
             img1.src= this.result;
             imageDraw();
         });
         reader.readAsDataURL(file);
     }
});

function imageDraw(){
    previewContainer.width  =img1.width;
    previewContainer.height =img1.height;
    
        img1.onload = function () {
            //draw background image
            ctx.clearRect(0,0,0,0);
            ctx.drawImage(img1, 0, 0,img1.width, img1.height,
                                0, 0, previewContainer.width, previewContainer.height);
        }
}
let generate = document.getElementById('generate');
generate.addEventListener('click', showTxt );
 function showTxt(){
    
    let topTxt    = document.getElementById('topTxt').value;
    let bottomTxt = document.getElementById('bottomTxt').value;
    let fontSize  = document.getElementById('fontSize').value;
    alert(topTxt);
    alert(bottomTxt);

    //let fontsize= (img1.height%img1.width)/4;
    //let text = topTxt.toUpperCase();
    ctx.font = fontSize +"px BlinkMacSystemFont";
    ctx.fillStyle = "green";
    ctx.strokeStyle= "black ";
    ctx.fillText(topTxt,previewContainer.width*0.2,previewContainer.height*0.3);
}

