
let sonic
let background1
let rings

let x = []
let y = []


let xPos;
let yPos;

let homeScreenBool = false
let startGameBool = true
let winScreenBool = false


let score = 0

function preload(){
sonic=loadImage('sonic.png')
background1=loadImage('background1.png')
rings=loadImage('sonicrings.png')



}








function setup(){
createCanvas(windowWidth,windowHeight)
background(background1)


for(let i =0; i <50; i++){
  x.push(random(windowWidth))
  y.push(random(windowHeight))


}
}

function draw(){


for(let i =0; i < 50; i++){
image(rings,x[i], y[i], 20,20)
}

if(dist(sonicX, sonicY, x[i], y[i])<30){
  x.splice(i, 1)
  y.splice(i, 1)
}


if(homeScreenBool == true){
  homeScreen()
}

if(startGameBool == true){
  startGame()
}





}

function homeScreen(){

  background(0)
    fill(250)
    textSize(20)
    text("Ring Conqueror", windowWidth/2.5, windowHeight/6)
    text("Press E for easy difficulty", windowWidth/4, windowHeight/4)
  text("Press M for easy difficulty", windowWidth/2, windowHeight/4 )
  text("Press H for hard difficulty", windowWidth/1.5, windowHeight/4)
if(key === 'e'){
if(key === 'm')
if(key === 'h')
homeScreenBool = false
startGameBool = true
}






}

function startGame(){
background(0)
  fill(0)
  textSize(40)
  text("Your score is " + score, windowWidth/2, 50)
  for(let i= 1; i< 10; i++ ){
    image(rings, random(windowWidth), random(windowHeight), 20 , 20)
  }

    if (keyIsDown(LEFT_ARROW)) {
        x -= 10;
      }

      if (keyIsDown(RIGHT_ARROW)) {
        x += 10;
      }

      if (keyIsDown(UP_ARROW)) {
        y -= 10;
      }

      if (keyIsDown(DOWN_ARROW)) {
        y += 10;
      }


      image(sonic, x, y, 50,50)


      if (x < 0){
         x +=10
       }
       if (x >= windowWidth){
         x -= 50
       }

       if (y < 0){
         y +=10
       }
       if (y >= windowHeight){
         y -= 50
       }

       for(let i= 1; i< 10; i++ ){
         image(rings, random(windowWidth), random(windowHeight), 20 , 20)
       }






  if(score >= 5){
    startGameBool = false
    winScreenBool = true

}
}


function winScreen(){

  background(200, 30, 100)
  fill(225)
  textSize(40)
  text("You Won!! " + score, windowWidth/2, 50)




}




function windowResized(){

}
