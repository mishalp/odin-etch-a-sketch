const pixel = document.createElement('div');
pixel.classList.add('pixel')
//console.log(pixel);
const canvas = document.getElementById('canvas')
pixel.style.height = 32+'px'
pixel.style.width = 32+'px'
for(let i=0;i<16 * 16;i++){
  canvas.appendChild(pixel.cloneNode(true))
}



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  canvas.textContent = ''
  let size = this.value
  output.innerHTML = `${this.value}x${this.value}` ;
  let h = 512/size;
  pixel.style.height = h+'px'
  pixel.style.width = h+'px'
  for(let i=0;i<size * size;i++){
    canvas.appendChild(pixel.cloneNode(true))
}
clicker()
}
pixels = document.querySelectorAll('.pixel')


pixels.forEach((pix)=>{
  pix.addEventListener('click', () => {
    pix.classList.add('black')
});
})

function clicker() {
  pixels = document.querySelectorAll('.pixel')


pixels.forEach((pix)=>{
  pix.addEventListener('click', () => {
    pix.classList.add('black')
});
})

  
}

