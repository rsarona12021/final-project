
let sonic
let background1
let background2
let background3
let rings
let buzzer
let eggman
let motobug
let sonicrunning
let sonicdancing
let reeses
let sonicring
let resize

let buzzerxSpeed = []
let buzzerySpeed =[]
let buzzerX=[]
let buzzerY=[]

let motobugxSpeed = []
let motobugySpeed =[]
let motobugX=[]
let motobugY=[]

let eggmanxSpeed = []
let eggmanySpeed =[]
let eggmanX=[]
let eggmanY=[]







let customFont

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
let easywinScreenBool=false
let mediumwinScreenBool=false
let hardwinScreenBool=false
let instructionBool=false
let deathScreenBool=false

let i = []


function preload(){
  sonic=loadImage('sonic.png')
  background1=loadImage('background1.png')
  rings=loadImage('sonicrings.png')
  buzzer=loadImage('buzzer.png')
  background2=loadImage('background2.png')
  background3=loadImage('background3.png')
  motobug=loadImage('motobug.png')
  eggman=loadImage('eggman.png')
customFont = loadFont('gamefont.ttf')
sonicrunning = loadImage('sonicrunning.gif')
sonicdancing = loadImage('sonicdancing.gif')
 reeses = loadImage('reeses.png')
sonicring = loadSound('sonicring.mp3')
}








function setup(){
  createCanvas(windowWidth,windowHeight)
  //background(background1)

  for(let i =0; i <10; i++){
    x.push(random(windowWidth))
    y.push(random(windowHeight))
  }

  for(let i =0; i<5; i++){
    buzzerX.push(random(windowWidth))
    buzzerY.push(random(windowHeight))
    buzzerxSpeed.push(random(1,3))
    buzzerySpeed.push(random(1,3))
  }

  for(let i =0; i<7; i++){
    motobugX.push(random(windowWidth))
    motobugY.push(random(windowHeight))
    motobugxSpeed.push(random(8))
    motobugySpeed.push(random(8))
  }

  for(let i =0; i<8; i++){
    eggmanX.push(random(windowWidth))
    eggmanY.push(random(windowHeight))
    eggmanxSpeed.push(random(12))
    eggmanySpeed.push(random(12))
  }



  sonicX = windowWidth/2
  sonicY = windowHeight/2

  xPos = random(windowWidth)
  yPos = random(windowHeight)
  print(xPos)

}


function draw(){


  if(easyGameBool == true){
    easyGame()}

    if(mediumGameBool == true){
      mediumGame()}

      if(hardGameBool == true){
        hardGame()}

        if(easywinScreenBool == true){
          easywinScreen()
        }
        if(mediumwinScreenBool==true){
          mediumwinScreen()
        }

        if(hardwinScreenBool == true){
          hardwinScreen()
        }

        if(homeScreenBool==true){
          homeScreen()
        }
        if(instructionBool==true){
          instructionscreen()

        }
        if(deathScreenBool==true){
        deathScreen()
      }



      }



      function homeScreen(){
        background(0)
        fill(250)
        textFont(customFont)
        textSize(50)
        text("Ring Conqueror", windowWidth/2.7, windowHeight/6)
        textSize(23)
        text("Press E for easy difficulty", windowWidth/8.1, windowHeight/3)
        text("Press M for medium difficulty", windowWidth/2.6, windowHeight/3 )
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
            if(key === 'p'){
              homeScreenBool= true
              deathScreenBool=false
            }


          }


          function instructionscreen(){
            background(0)
            fill(250)
            textSize(40)
            text("How To Play", windowWidth/2.7, windowHeight/12)
            textSize(30)
            text("Use the arrow keyes to move the character.", windowWidth/4, windowHeight/3)
            text("Collect all the rings in each level to win.", windowWidth/4, windowHeight/2.25)
            text("You only have one life, so make sure to avoid enimies or you  will die.", windowWidth/10, windowHeight/1.8)
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
              text("Collect all rings to win. Your score " + score, windowWidth/6, 50)

              if(score >= 10){
                for(let i =0; i <10; i++){
                  x.push(random(windowWidth))
                  y.push(random(windowHeight))
                }
                easyGameBool = false
                easywinScreenBool = true

              }


              // image(buzzer, xPos, yPos, 50, 50)
              // xPos = xPos + buzzerxSpeed
              // yPos = yPos + buzzerySpeed
              //
              //
              //
              //
              // if(xPos>= windowWidth -5 || xPos <=0) {
              //   buzzerxSpeed = buzzerxSpeed *-1
              // }
              //
              // if(yPos>= windowHeight || yPos <=0) {
              //   buzzerySpeed = buzzerySpeed * -1
              // }





              // for(let i =0; i < x.length; i++){
              //   image(sonic,x[i], y[i], 20,20)
              //   if(dist(xPos, yPos, x[i], y[i])<30){
              //     x.splice(i, 1)
              //     y.splice(i, 1)
              //     homeScreenBool=true
              //     easyGameBool=false
              //     print(x.length)
              //   }
              // }

              for(let i = 0; i<buzzerX.length; i++){
                image(buzzer, buzzerX[i], buzzerY[i], 20, 20)

                buzzerX[i] = buzzerX[i] + buzzerxSpeed[i]
                buzzerY[i] = buzzerY[i]+ buzzerySpeed[i]

                if(buzzerX[i]>= windowWidth -5 || buzzerX[i] <=0) {
                   buzzerxSpeed[i] =  buzzerxSpeed[i] *-1
                }

                if(  buzzerY[i]>= windowHeight ||   buzzerY[i] <=0) {
                  buzzerySpeed[i] = buzzerySpeed[i] * -1
                }

                  if(dist(sonicX, sonicY, buzzerX[i],buzzerY[i])<30){
                    sonicX = windowWidth/2
                    sonicY = windowHeight/2
                    deathScreenBool=true
                    easyGameBool=false
                  }
              }

              for(let i =0; i < x.length; i++){
                image(rings,x[i], y[i], 20,20)
                if(dist(sonicX, sonicY, x[i], y[i])<30){
                  x.splice(i, 1)
                  y.splice(i, 1)
                  score++
                  sonicring.play()
                  print(x.length)


                }
              }

              for(let i= 1; i< 0; i++ ){
                image(rings, random(windowWidth), random(windowHeight), 20 , 20)
                x.push(random(windowWidth))
                y.push(random(windowHeight))
              }




              image(sonic, sonicX, sonicY, 50,50)



              if (keyIsDown(LEFT_ARROW)) {
                sonicX -= 8;
              }

              if (keyIsDown(RIGHT_ARROW)) {
                sonicX += 8;
              }

              if (keyIsDown(UP_ARROW)) {
                sonicY -= 8;
              }

              if (keyIsDown(DOWN_ARROW)) {
                sonicY += 8;
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
                text("Collect all rings to win. Your score " + score, windowWidth/6, 50)



              if(score >= 10){
                mediumGameBool = false
                mediumwinScreenBool = true

              }


              for(let i = 0; i<motobugX.length; i++){
                image(motobug, motobugX[i], motobugY[i], 20, 20)

                motobugX[i] = motobugX[i] + motobugxSpeed[i]
                motobugY[i] = motobugY[i]+ motobugySpeed[i]

                if(motobugX[i]>= windowWidth -5 || motobugX[i] <=0) {
                   motobugxSpeed[i] =  motobugxSpeed[i] *-1
                }

                if(  motobugY[i]>= windowHeight ||   motobugY[i] <=0) {
                  motobugySpeed[i] = motobugySpeed[i] * -1
                }

                  if(dist(sonicX, sonicY, motobugX[i],motobugY[i])<30){
                    sonicX = windowWidth/2
                    sonicY = windowHeight/2
                    deathScreenBool=true
                    mediumGameBool=false
                  }
                }


              for(let i =0; i < x.length; i++){
                image(rings,x[i], y[i], 20,20)
                if(dist(sonicX, sonicY, x[i], y[i])<30){
                  x.splice(i, 1)
                  y.splice(i, 1)
                  sonicring.play()
                  score++
                }
              }

              for(let i= 1; i< 0; i++ ){
                image(rings, random(windowWidth), random(windowHeight), 20 , 20)
                x.push(random(windowWidth))
                y.push(random(windowHeight))
              }


              image(sonic, sonicX, sonicY, 50,50)



              if (keyIsDown(LEFT_ARROW)) {
                sonicX -= 8;
              }

              if (keyIsDown(RIGHT_ARROW)) {
                sonicX += 8;
              }

              if (keyIsDown(UP_ARROW)) {
                sonicY -= 8;
              }

              if (keyIsDown(DOWN_ARROW)) {
                sonicY += 8;
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
            text("Collect all rings to win. Your score " + score, windowWidth/6, 50)

              if(score >= 10){
                hardGameBool = false
                hardwinScreenBool = true

              }

              for(let i = 0; i<eggmanX.length; i++){
                image(eggman, eggmanX[i], eggmanY[i], 20, 20)

                eggmanX[i] = eggmanX[i] + eggmanxSpeed[i]
                eggmanY[i] = eggmanY[i]+ eggmanySpeed[i]

                if(eggmanX[i]>= windowWidth -5 || eggmanX[i] <=0) {
                   eggmanxSpeed[i] =  eggmanxSpeed[i] *-1
                }

                if(  eggmanY[i]>= windowHeight ||   eggmanY[i] <=0) {
                  eggmanySpeed[i] = eggmanySpeed[i] * -1
                }

                  if(dist(sonicX, sonicY, eggmanX[i],eggmanY[i])<30){
                    sonicX = windowWidth/2
                    sonicY = windowHeight/2
                    deathScreenBool=true
                    hardGameBool=false
                  }
                }


              for(let i =0; i <x.length; i++){
                image(rings,x[i], y[i], 20,20)
                if(dist(sonicX, sonicY, x[i], y[i])<30){
                  x.splice(i, 1)
                  y.splice(i, 1)
                  sonicring.play()
                  score++
                }
              }

              for(let i= 1; i< 0; i++ ){
                image(rings, random(windowWidth), random(windowHeight), 20 , 20)
                x.push(random(windowWidth))
                y.push(random(windowHeight))
              }


              image(sonic, sonicX, sonicY, 50,50)



              if (keyIsDown(LEFT_ARROW)) {
                sonicX -= 5;
              }

              if (keyIsDown(RIGHT_ARROW)) {
                sonicX += 5;
              }

              if (keyIsDown(UP_ARROW)) {
                sonicY -= 5;
              }

              if (keyIsDown(DOWN_ARROW)) {
                sonicY += 5;
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


            function easywinScreen(){

              background(0)
              fill(225)
              textSize(35)
              text("Good job, but that was too easy. Now go beat the next level.", windowWidth/8, windowHeight/6)
              text("Press Q to quit", windowWidth/8, windowHeight/4)
              image(sonicdancing, windowWidth/2.5, windowHeight/2)
              if(key === 'q'){
                score=0
                homeScreenBool=true
                easywinScreenBool=false}






              }


              function mediumwinScreen(){

                background(0)
                fill(225)
                textSize(35)
                text("Nice! It seems like you're ready for the hardest level.", windowWidth/8, windowHeight/6)
                text("Do you have what it takes?", windowWidth/8, windowHeight/4.5)
                text("Press Q to quit.", windowWidth/8, windowHeight/3.5)

                image(sonicrunning, windowWidth/3, windowHeight/2)
                if(key === 'q'){
                  score=0
                  homeScreenBool=true
                  mediumwinScreenBool=false}






                }


                function hardwinScreen(){

                  background(0)
                  fill(225)
                  textSize(35)
                  text("Congradulations! You have collected all the rings.", windowWidth/8, windowHeight/6)
                  text("You are now an official ring conqueror.", windowWidth/8, windowHeight/4.5)
                  text("Here, take this for your good work.", windowWidth/8, windowHeight/3.5)

                  image(reeses, windowWidth/6.5, windowHeight/2)
                  text("Press Q to quit.", windowWidth/8, windowHeight/2)

                  if(key === 'q'){
                    score=0
                    homeScreenBool=true
                    hardwinScreenBool=false}




                  }

                  function deathScreen(){
                    background(0)
                    fill(225)
                    textSize(35)
                    text("Whoops, looks like you died. Try again.", windowWidth/8, windowHeight/6)
                    text("Press p to exit to home screen.", windowWidth/8, windowHeight/4)
                    if(key === 'p'){
                      homeScreenBool=true
                      deathScreenBool=false
                    }
                  }



              function windowResized(){

              }
