var poundInput = document.getElementById("poundInput")
var grams = document.getElementById("gramsOutput")
var kg = document.getElementById("kgOutput")
var oz = document.getElementById("ouncesOutput")
var weightButton = document.getElementById("weight")
var timeButton = document.getElementById("time")

grams.innerHTML = 0
kg.innerHTML = 0
oz.innerHTML = 0

weightButton.addEventListener("click", resetWeight)
timeButton.addEventListener("click", resetTime)

timeButton.addEventListener("click", function(){
  minuteInput.value = " "
})

weightButton.addEventListener("click", function(){
  poundInput.value = " "
})

  poundInput.addEventListener("input", function(event){
      var pounds = event.target.value;
      grams.innerHTML = pounds * 453.59237
  })
  
  poundInput.addEventListener("input", function(event){
      var pounds = event.target.value;
      kg.innerHTML = pounds * 0.45359237
  })
  
  poundInput.addEventListener("input", function(event){
      var pounds = event.target.value;
      oz.innerHTML = pounds * 16
  })
  
  // TIME CONVERTER
  
var minuteInput  = document.getElementById("minuteInput")
var miliSec = document.getElementById("msOutput")
var sec = document.getElementById("secondsOutput")
var hours = document.getElementById("hoursOutput")

hours.innerHTML = 0
sec.innerHTML = 0
miliSec.innerHTML = 0

minuteInput.addEventListener("input", function(event){
  var minutes = event.target.value
  miliSec.innerHTML = minutes * 60000
})

minuteInput.addEventListener("input", function(event){
  var minutes = event.target.value
  sec.innerHTML = minutes * 60
})

minuteInput.addEventListener("input", function(event){
  var minutes = event.target.value
  hours.innerHTML = minutes / 60
})



function resetTime(){
  hours.innerHTML = 0
  sec.innerHTML = 0
  miliSec.innerHTML = 0
}

function resetWeight(){
  grams.innerHTML = 0
  kg.innerHTML = 0
  oz.innerHTML = 0
}

