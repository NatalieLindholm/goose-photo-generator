const imageArray = [
    "images1.jpg", "images2.jpg", "images3.jpg", "images4.jpg", "images5.jpg", "images6.jpg", "images7.jpg", "images8.jpg", "images9.jpg", "images10.jpg"
]; //add goose photos in here for the generator

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray)); //makes it so when you click the button is generates photo from the array

function generateRandomPicture(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    image.setAttribute("src", array[randomNum]);
}