function setup() {
    createCanvas(400, 400);
     background("white");
  }
  
  function draw() {
   
    
    stroke("black");
    fill("purple");
  
   //console.log(mouseIsPressed);
    if (mouseIsPressed)
    rect(mouseX, mouseY, 30, 30)
  
  }