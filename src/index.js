console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", fetchDog)

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