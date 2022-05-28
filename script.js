var images;


images = ['https://images.squarespace-cdn.com/content/v1/59523d5c4c8b031b6d9dcb5b/1645865436351-NF1WX4AHJUE43OZ3GJCY/_S6A1420-Edit-Edit.jpg?format=2500w', 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg', 'https://i.natgeofe.com/n/8a4cd21e-3906-4c9d-8838-b13ef85f4b6e/tpc18-outdoor-gallery-1002418-12000351_01.jpg', 'https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg', 'https://wallpaperaccess.com/full/475846.jpg'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", images[0]);


document.getElementById('previous').addEventListener('click', (event) => {
  images.unshift(images.pop());
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", images[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  images.unshift(images.pop());
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", images[0]);

});
