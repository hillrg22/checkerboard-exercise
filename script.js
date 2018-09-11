
var body = document.querySelector('body')

for (let i=0; i < 60; i++){
var div = document.createElement('div')
var div2 = document.createElement('div')
body.appendChild(div)
body.appendChild(div2)
div.setAttribute('class', 'red')
div2.setAttribute('class', 'black')
div.style.width = '11.1%'
div.style.height = '11.1%'
div.style.float = 'left'
div.style.paddingBottom = '11.1%'
div.style.backgroundImage = 'linear-gradient(black,black), linear-gradient(red, red)'
div.style.backgroundClip = 'content-box, padding-box'
div2.style.width = '11.1%'
div2.style.height = '11.1%'
div2.style.float = 'left'
div2.style.paddingBottom = '11.1%'
div2.style.backgroundImage = 'linear-gradient(red, red), linear-gradient(black, black)'
div2.style.backgroundClip = 'content-box, padding-box'

}
