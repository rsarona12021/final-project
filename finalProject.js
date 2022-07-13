
let sonic
let background1
let background2
let background3
let rings
let buzzer

let xSpeed
let ySpeed


let x = []
let y = []

let score =0
let sonicX
let sonicY


let xPos;
let yPos;

let homeScreenBool = true
let easyGameBool = false
let mediumGameBool =false
let hardGameBool =false
let winScreenBool=false
let instructionBool=false


let i = []


function preload(){
  sonic=loadImage('sonic.png')
  background1=loadImage('background1.png')
  rings=loadImage('sonicrings.png')
  buzzer=loadImage('buzzer.png')
  background2=loadImage('background2.png')
  background3=loadImage('background3.png')
}








function setup(){
  createCanvas(windowWidth,windowHeight)
  //background(background1)

  for(let i =0; i <10; i++){
    x.push(random(windowWidth))
    y.push(random(windowHeight))
  }

  sonicX = windowWidth/2
  sonicY = windowHeight/2



}


function draw(){


  if(easyGameBool == true){
    easyGame()}

    if(mediumGameBool == true){
      mediumGame()}

      if(hardGameBool == true){
        hardGame()}

        if(winScreenBool == true){
          winScreen()
        }


        if(homeScreenBool==true){
          homeScreen()
        }
        if(instructionBool==true){
          instructionscreen()

        }

      }



      function homeScreen(){
        background(0)
        fill(250)
        textSize(50)
        text("Ring Conqueror", windowWidth/2.7, windowHeight/6)
        textSize(30)
        text("Press E for easy difficulty", windowWidth/7, windowHeight/3)
        text("Press M for easy difficulty", windowWidth/2.5, windowHeight/3 )
        text("Press H for hard difficulty", windowWidth/1.5, windowHeight/3)
        text("Press I for instructions", windowWidth/2.5, windowHeight/1.5)

        if(key === 'e'){
          easyGameBool=true

          homeScreenBool=false
        }

        if(key === 'm'){
          mediumGameBool=true

          homeScreenBool=false}

          if(key === 'h'){
            hardGameBool=true

            homeScreenBool=false}

            if(key === 'i'){
              instructionBool = true
              homeScreenBool= false
            }

            if(key === 'q'){
              homeScreenBool = true
              winScreenBool = false
            }
            if(key === 'i'){
              instructionBool = true
              homeScreenBool = false
            }

            if(key === 'l'){
              homeScreenBool = true
              instructionBool = false
            }


          }


          function instructionscreen(){
            background(0)
            fill(250)
            textSize(40)
            text("How To Play", windowWidth/4, windowHeight/12)
            text("Use the arrow keyes to move the character.", windowWidth/5, windowHeight/2.75)
            text("Collect all the rings in each level to win.", windowWidth/4, windowHeight/2.25)
            text("You only have one life, so make sure to avoid enimies or you die.", windowWidth/10, windowHeight/1.8)
            text("Have fun!", windowWidth/4, windowHeight/1.5)
            text("Press L to return back to home screen", windowWidth/4, windowHeight/1.33)
            if(key === 'l'){
              homeScreenBool=true
              instructionBool=false}

            }


            function easyGame(){
              background(background1)
              fill(0)
              textSize(40)
              text("Collect all rings to win" + score, windowWidth/2.5, 50)

              if(score >= 10){
                easyGameBool = false
                winScreenBool = true

              }


              image(buzzer, xPos, yPos, 30, 30)
              xPos = xPos + xSpeed
              yPos = yPos + ySpeed

              if(xPos>= windowWidth -15 || xPos <=0) {
                xSpeed = xSpeed *-1
              }

              if(yPos>= windowHeight || yPos <=0) {
                ySpeed = ySpeed * -1
              }



              for(let i =0; i < x.length; i++){
                image(rings,x[i], y[i], 20,20)
                if(dist(sonicX, sonicY, x[i], y[i])<30){
                  x.splice(i, 1)
                  y.splice(i, 1)
                  score++
                  print(x.length)
                }
              }

              for(let i= 1; i< 0; i++ ){
                image(rings, random(windowWidth), random(windowHeight), 20 , 20)
              }




              image(sonic, sonicX, sonicY, 50,50)



              if (keyIsDown(LEFT_ARROW)) {
                sonicX -= 10;
              }

              if (keyIsDown(RIGHT_ARROW)) {
                sonicX += 10;
              }

              if (keyIsDown(UP_ARROW)) {
                sonicY -= 10;
              }

              if (keyIsDown(DOWN_ARROW)) {
                sonicY += 10;
              }

              if (sonicX < 0){
                sonicX +=10
              }
              if (sonicX >= windowWidth){
                sonicX -= 50
              }

              if (sonicY < 0){
                sonicY +=10
              }
              if (sonicY >= windowHeight){
                sonicY -= 50
              }


            }






            function mediumGame(){
              createCanvas(windowWidth, windowHeight)
              background(background2)
              fill(0)
              textSize(40)
              text("Collect all rings to win" + score, windowWidth/2.5, 50)

              if(score >= 3){
                mediumGameBool = false
                winScreenBool = true

              }


              for(let i =0; i < 10; i++){
                image(rings,x[i], y[i], 20,20)
                if(dist(sonicX, sonicY, x[i], y[i])<30){
                  x.splice(i, 1)
                  y.splice(i, 1)
                  score++
                }
              }

              for(let i= 1; i< 0; i++ ){
                image(rings, random(windowWidth), random(windowHeight), 20 , 20)
              }


              image(sonic, sonicX, sonicY, 50,50)



              if (keyIsDown(LEFT_ARROW)) {
                sonicX -= 10;
              }

              if (keyIsDown(RIGHT_ARROW)) {
                sonicX += 10;
              }

              if (keyIsDown(UP_ARROW)) {
                sonicY -= 10;
              }

              if (keyIsDown(DOWN_ARROW)) {
                sonicY += 10;
              }

              if (sonicX < 0){
                sonicX +=10
              }
              if (sonicX >= windowWidth){
                sonicX -= 50
              }

              if (sonicY < 0){
                sonicY +=10
              }
              if (sonicY >= windowHeight){
                sonicY -= 50
              }


            }

            function hardGame(){

              createCanvas(windowWidth, windowHeight)
              background(background3)
              fill(0)
              textSize(40)
              text("Collect all rings to win" + score, windowWidth/2.5, 50)

              if(score >= 3){
                hardGameBool = false
                winScreenBool = true

              }


              for(let i =0; i < 10; i++){
                image(rings,x[i], y[i], 20,20)
                if(dist(sonicX, sonicY, x[i], y[i])<30){
                  x.splice(i, 1)
                  y.splice(i, 1)
                  score++
                }
              }

              for(let i= 1; i< 0; i++ ){
                image(rings, random(windowWidth), random(windowHeight), 20 , 20)
              }


              image(sonic, sonicX, sonicY, 50,50)



              if (keyIsDown(LEFT_ARROW)) {
                sonicX -= 10;
              }

              if (keyIsDown(RIGHT_ARROW)) {
                sonicX += 10;
              }

              if (keyIsDown(UP_ARROW)) {
                sonicY -= 10;
              }

              if (keyIsDown(DOWN_ARROW)) {
                sonicY += 10;
              }

              if (sonicX < 0){
                sonicX +=10
              }
              if (sonicX >= windowWidth){
                sonicX -= 50
              }

              if (sonicY < 0){
                sonicY +=10
              }
              if (sonicY >= windowHeight){
                sonicY -= 50
              }



            }


            function winScreen(){

              background(200, 30, 100)
              fill(225)
              textSize(20)
              text("You Won!! Now go beat the next level. press Q to quit.", windowWidth/2.5, 50)
              if(key === 'q'){
                score=0
                homeScreenBool=true
                winScreenBool=false}






              }




              function windowResized(){

              }
