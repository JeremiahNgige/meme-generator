let input
let img


function preload(){
  input = createFileInput(handleFile);
}

function setup() {
  createCanvas(400,400)
  input.position(0,0);

}

function draw() {
  background(220)
  if (img) {
    image (img,0,0, width, height )
  }
  //image(meme, 0,0, mouseX, mouseY )
} 

function handleFile(file) {
  print(file)
  if (file.type==='image') {
    img = createImg(file.data, '')
    img.hide()
  } else {
    img = null
  }

}


