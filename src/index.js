console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", fetchDog)

document.addEventListener("DOMContentLoaded", fetchAllDogsBreeds)

function fetchDog() {
    fetch(imgUrl)
        .then(response => response.json())
        .then(json => dogImg(json.message))
}

function dogImg(imgArray){
    let dogContainer = document.getElementById("dog-image-container")
 
    imgArray.forEach(dogUrl => {
        dogContainer.innerHTML += `<img src="${dogUrl}">`
    })
}

function fetchAllDogsBreeds(){
    fetch(breedUrl)
        .then(response => response.json())
        .then( json2 => listBreed(json2.message))
}

function listBreed(breeds){
    let dogBreeds = document.getElementById("dog-breeds")
        for(breed in breeds) {
            let newBreedElement = document.createElement("li")
            newBreedElement.innerText = breed 
            dogBreeds.appendChild(newBreedElement)
            newBreedElement.addEventListener("click", colorChangeHandler)
        }
}

function colorChangeHandler(e) {
    e.target.style.color = 'dodgerblue'
}