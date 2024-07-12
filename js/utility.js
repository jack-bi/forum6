function showRandomPhoto(){
  let img = document.querySelector('#area4 img');
  
  let randomIndex = Math.floor(Math.random() * 223) + 1; // Generates a random number between 1 and 223

  // Assuming that the images are in the same directory and are named 1.jpg, 2.jpg, ..., 223.jpg
  img.src = `./images/beauty/${randomIndex}.jpg`;
}

document.addEventListener('DOMContentLoaded', (event) => {
  showRandomPhoto();
});