function onPageLoad() {
    
    fetch("http://localhost:3000/pups")
    .then(res => res.json())
    .then(function(data) {
        data.forEach((element) => {
            const dogBar = document.querySelector('#dog-bar');
            const pupName = document.createElement('span');
            
            const isGoodDog = element.isGoodDog
            
            pupName.textContent = element.name
            pupName.id = element.id
            
            dogBar.appendChild(pupName)
            dogInfo(isGoodDog, pupName, element);
        })
    })
}

onPageLoad()

function dogInfo(isGoodDog, pupName, element) {
    const dogPic = document.createElement('img');
    const dogName = document.createElement('h2');
    const btn = document.createElement('button');
    
    dogPic.src = element.image
    dogName.textContent = element.name

    
    btnStatus(btn, isGoodDog);
    updateDoggo(btn, element, isGoodDog)
    
    pupName.addEventListener("click", (e) => {
        let dogInformation = document.querySelector('#dog-info');
        dogInformation.innerHTML = ""
        
        dogInformation.append(dogPic, dogName, btn)
    })
    
}

function updateDoggo(btn, element, isGoodDog) {
    
    btn.addEventListener("click", (e) => {
        let dogId = element.id
        
        
        if (isGoodDog === true) {
            isGoodDog = false;
        } else if (isGoodDog === false) {
            isGoodDog = true;
        }
           
        fetch(`http://localhost:3000/pups/${dogId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                isGoodDog: isGoodDog,
            })
        })
        btnStatus(btn, isGoodDog)
    })
}
function btnStatus(btn, isGoodDog) {
    if (isGoodDog === true) {
        btn.textContent = "Good Dog!"
    } else {
        btn.textContent = "Bad Dog!"
    }
}