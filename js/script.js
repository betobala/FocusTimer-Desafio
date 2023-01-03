import Timer from "./timer.js"

import {btnMinus,
        btnPlus,
        btnCoffee,
        btnFire,
        btnForest,
        btnRain,
        btnPlay,
        btnStop, 
        minutesDisplay,
        secondsDisplay
      } from "./elements.js"

import Sound from "./sounds.js"

import Controls from "./controls.js"

const controls = Controls({
  btnCoffee,
  btnFire,
  btnForest,
  btnRain})
const sound = Sound()
const timer = Timer({minutesDisplay, secondsDisplay})
let counter = 0


btnPlay.addEventListener('click', function() {
  if (counter === 0){
  timer.countdown()
  counter = 1
  }
})

btnStop.addEventListener('click', function() {
  counter = 0
  timer.hold()
})

btnPlus.addEventListener('click', function(){
  timer.plusMinutes(5)
})

btnMinus.addEventListener('click', function(){
  timer.plusMinutes(-5)
})

btnCoffee.addEventListener('click', function(){
  controls.coffeeOn()
  sound.coffeePlay()
})

btnFire.addEventListener('click', function(){
  controls.fireOn()
  sound.firePlay()
})

btnForest.addEventListener('click', function(){
  controls.forestOn()
  sound.forestPlay()
})

btnRain.addEventListener('click', function(){
  controls.rainOn()
  sound.rainPlay()
})