//* main code
// const canvas = document.getElementById("canvas")

// const ctx = canvas.getContext("2d")
// ctx.strokeStyle = "DeepPink"
// ctx.lineWidth = 4
// ctx.strokeRect(10, 10, 100, 20)


// const ctx = canvas.getContext("2d")
// ctx.fillStyle = "Red"
// ctx.fillRect(0, 0, 100, 100)

// const secondDraw = document.getElementById("second")
// const sec = secondDraw.getContext("2d")
// sec.fillStyle = "black"
// sec.fillRect(0, 0, 100, 100)

// const thirdDraw = document.getElementById("third")
// const third = thirdDraw.getContext("2d")
// third.fillStyle = "green"
// third.fillRect(0, 0, 100, 100)

// ctx.fillRect(0, 0, 10, 10)
// for (let i = 0; i < 8; i++){
//     ctx.fillRect(i * 10, i * 10, 10, 10)
// }

// * draw men 
// const men = document.getElementById("men")

// const menDraw = men.getContext("2d") 
// menDraw.fillRect(100, 10, 50, 50)
// menDraw.fillRect(120, 60, 10, 30)
// menDraw.fillRect(90, 90, 70, 70)

// * draw lines 
// const canvas = document.getElementById("canvas")
// const ctx = canvas.getContext("2d")
// // ! line colr & line width 
// ctx.strokeStyle = "Turquoise"
// ctx.lineWidth = 4
// // ! start of paht
// ctx.beginPath()
// // ! change starting position 
// ctx.moveTo(10, 10)
// // ! draw line 
// ctx.lineTo(60, 60)
// // ! change starting position 
// ctx.moveTo(60, 10)
// // ! draw line
// ctx.lineTo(10, 60)
// ctx.stroke()
// * draw home 
const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")
ctx.fillStyle = "Blue"
ctx.beginPath()
ctx.moveTo(100, 100)
ctx.lineTo(100, 60)
ctx.lineTo(130, 30)
ctx.lineTo(160, 60)
ctx.lineTo(160, 60)
ctx.lineTo(160, 100)
ctx.lineTo(100, 100)
ctx.fill()
