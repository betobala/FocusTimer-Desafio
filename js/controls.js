export default function Controls({
  buttonPause,
  buttonPlay,
  btnRain,
  btnFire,
  btnForest,
  btnCoffee
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function rainOn() {
    btnRain.classList.add('on')
    btnForest.classList.remove('on')
    btnFire.classList.remove('on')
    btnCoffee.classList.remove('on')
  }
  function fireOn() {
    btnFire.classList.add('on')
    btnForest.classList.remove('on')
    btnRain.classList.remove('on')
    btnCoffee.classList.remove('on')
  }
  function forestOn() {
    btnForest.classList.add('on')
    btnRain.classList.remove('on')
    btnFire.classList.remove('on')
    btnCoffee.classList.remove('on')
  }
  function coffeeOn() {
    btnCoffee.classList.add('on')
    btnForest.classList.remove('on')
    btnFire.classList.remove('on')
    btnRain.classList.remove('on')
  }
  
  return {
    play,
    pause,
    fireOn,
    forestOn,
    rainOn,
    coffeeOn
  }
}