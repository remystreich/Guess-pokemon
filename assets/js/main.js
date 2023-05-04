
let score = 0
let goal =""
async function displayPoke() {
    let randomId =  Math.floor(Math.random() * 350);
    let pokemons = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${randomId}`);
    pokemons = await pokemons.json();
    console.log(pokemons);
    goal = pokemons.name.toUpperCase();
    let imgContainer = document.getElementById('displayPoke');
    imgContainer.innerHTML = ""
    let pokePicture = document.createElement('img');
    pokePicture.src = pokemons.image
    pokePicture.classList.add('mx-auto','img-responsive')
    imgContainer.appendChild(pokePicture);
};
displayPoke()


function submitChoice() {
    let guess = document.getElementById('pokeName').value.toUpperCase()
    if (goal== guess) {
        document.getElementById('result').innerText = "Gagné"
        score++
        document.getElementById('score').innerText = "Score : " +score
        document.getElementById('result').classList.add('text-success')
        
    }
    else {
        document.getElementById('result').innerText = "Perdu"
        document.getElementById('result').classList.add('text-danger')   
    }
displayPoke();   
}

let input = document.getElementById("pokeName");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      submitChoice()
    }
  });