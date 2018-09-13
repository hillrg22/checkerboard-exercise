
var body = document.querySelector('body')
body.style.width = '100%'
body.style.height = '100%'


const rgbConst = 255
function randomColors(){
var rand = 'rgb(' + Math.round(rgbConst*Math.random())+ ', ' + Math.round(rgbConst*Math.random()) + ', ' + Math.round(rgbConst*Math.random())+ ')'
return `${rand},${rand}`
}



for (let i=0; i < 200; i++){
var div = document.createElement('div')
var div2 = document.createElement('div')
body.appendChild(div)
body.appendChild(div2)
div.setAttribute('class', 'red')
div2.setAttribute('class', 'black')
div.style.width = "11.1%"
div.style.height = "11.1%"
div.style.float = 'left'
div.style.paddingBottom = "11.1%"
div.style.backgroundImage = `linear-gradient(${randomColors()}), linear-gradient(${randomColors()})`
div.style.backgroundClip = 'content-box, padding-box'
div2.style.width = "11.1%"
div2.style.height = "11.1%"
div2.style.float = 'left'
div2.style.paddingBottom = "11.1%"
div2.style.backgroundImage = `linear-gradient(${randomColors()}), linear-gradient(${randomColors()})`
div2.style.backgroundClip = 'content-box, padding-box'


}
