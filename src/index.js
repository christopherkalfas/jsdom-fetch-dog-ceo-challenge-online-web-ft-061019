console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let filter = null


document.addEventListener("DOMContentLoaded", fetchDog)

document.addEventListener("DOMContentLoaded", fetchAllDogsBreeds)

document.addEventListener("change", filterBreed )

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
    let dogBreeds = document.querySelector('[id="dog-breeds"]')
        for(breed in breeds) {
            if(!filter || breed.startsWith(filter)){
            let newBreedElement = document.createElement("li")
            newBreedElement.innerText = breed 
            dogBreeds.appendChild(newBreedElement)
            newBreedElement.addEventListener("click", colorChangeHandler)
            }
        }
}

function colorChangeHandler(e) {
    e.target.style.color = 'dodgerblue'
}

function filterBreed(){
    let dogBreeds = document.querySelector('[id="dog-breeds"]')
    let breedList = dogBreeds.querySelectorAll("li")
}

function filterHandler(event) {
    let dogBreeds = document.querySelector('[id="dog-breeds"]')
    let breedList = dogBreeds.querySelectorAll("li")

    breedList.forEach(breed => {
        if (event.target.value === "") {
            breed.style.display = "block"
        } else if (breed.children[0].id[0] != event.target.value) {
            breed.style.display = "none"
        } else {
            breed.style.display = "block"
        }
    })
}
