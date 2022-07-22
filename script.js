const pixel = document.createElement('div');
pixel.classList.add('pixel')
//console.log(pixel);
const canvas = document.getElementById('canvas')

for(let i=0;i<256;i++){
    canvas.appendChild(pixel);
}

