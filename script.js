for(let i=0; i < 50; i++){
let div = document.createElement('div')
let div2 = document.createElement('div')
let body = document.querySelector('body')
body.appendChild(div)
body.appendChild(div2)
div.setAttribute('class', 'red')
div2.setAttribute('class', 'black')
div.style.backgroundColor = 'red'
div2.style.backgroundColor = 'black'
div.style.float = 'left'
div2.style.float = 'left'
div.style.width = '11.1vw'
div2.style.width = '11.1vw'
div.style.height = '11.1vh'
div2.style.height = '11.1vh'
div.style.paddingBottom = '11.1vh'
div2.style.paddingBottom = '11.1vh'
}
