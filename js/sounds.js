export default function(){

  const rain = new Audio('assets/Chuva.wav')
  const coffee = new Audio('assets/Cafeteria.wav')
  const fire = new Audio('assets/Lareira.wav')
  const forest = new Audio('assets/Floresta.wav')



function rainPlay(){
  rain.loop = true
  rain.play()
  fire.pause()
  forest.pause()
  coffee.pause()

}

function firePlay(){
  fire.loop = true
  fire.play()
  forest.pause()
  rain.pause()
  coffee.pause()
}

function forestPlay(){
  forest.loop = true
  forest.play()
  fire.pause()
  rain.pause()
  coffee.pause()
}

function coffeePlay(){
  coffee.loop = true
  coffee.play()
  fire.pause()
  rain.pause()
  forest.pause()
}



return {
  rainPlay,
  firePlay,
  forestPlay,
  coffeePlay
}
}