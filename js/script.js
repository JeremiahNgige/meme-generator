const inpFile = document.getElementById("inpFile");
var previewContainer = document.getElementById("imgPrev");
var img1 = new Image();
const previewText  = previewContainer.querySelector(".imgprevTxt");


inpFile.addEventListener('change', function(){
     const file = this.files[0];
     console.log(file)
     if(file && previewContainer.getContext){
         const reader =new FileReader();
         var ctx = previewContainer.getContext('2d');

         reader.addEventListener('load', function(){
             console.log(this);
             
             img1.src= this.result;
             
              
             img1.onload = function () {
                //draw background image
                ctx.drawImage(img1, 0, 0, img1.width, img1.height,0,0,previewContainer.width, previewContainer.height);
            };
         });
         reader.readAsDataURL(file);
     }

});
