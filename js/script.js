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
    previewContainer.width=img1.width;
    previewContainer.height=img1.height;
    

    if (previewContainer.getContext){
        img1.onload = function () {
               
              
            //draw background image
            ctx.drawImage(img1, 0, 0,img1.width, img1.height,
                                0, 0, previewContainer.width, previewContainer.height);
            
        }
    }
}
let generate = document.getElementById('generate');
generate.addEventListener('click', showTxt );
 function showTxt(){
    imageDraw();
    var topTxt = document.getElementById('topTxt').value;
    alert(topTxt);
   
    //let text = topTxt.toUpperCase();
    ctx.font = "20px Roboto";
    ctx.textAlign= "center";
    ctx.fillStyle = "black";
    ctx.strokeStyle= "black ";
    ctx.fillText(topTxt,1,1);
}

