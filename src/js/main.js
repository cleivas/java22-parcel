
const img = document.createElement('img');

const imgUrl = new URL('../media/placeholder.jpg', import.meta.url);

console.log(import.meta.url);

img.src = imgUrl;

document.body.append(img);

