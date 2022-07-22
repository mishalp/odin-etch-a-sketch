const pixel = document.createElement('div').cloneNode(true);
pixel.classList.add('pixel')
//console.log(pixel);
const canvas = document.getElementById('canvas')


for(let i=0;i<255;i++){
    canvas.appendChild(pixel.cloneNode(true))
}

