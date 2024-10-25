let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')

//find input box and disable it until canvas is ready
let input = document.querySelector('#image_text')
input.disabled = true 

//drawing the image - create an image and set the source
//add callback to know when the image is loaded and ready
//so can draw it to the canvas and enable the input 
let image = new Image()
image.src = 'meow.jpg'

image.addEventListener('load', function() {
    context.drawImage(image, 0, 0)
    input.disabled = false
})

//add event listener to input - will fire  if the the text is changed
input.addEventListener('input', function() {
    //read the data typed in the input
    // 'this' is the html element this event listener function
    let text = this.value

    context.drawImage(image, 0, 0)
    context.font = '30px Arial'
    context.fillStyle = 'darkblue'
    context.fillText(text, 30, 100)
})
