function onPageLoad() {
    
    fetch("http://localhost:3000/pups")
    .then(res => res.json())
    .then(function(data) {
        data.forEach((element) => {
        const dogBar = document.querySelector('#dog-bar');
        const pupName = document.createElement('span');
        
        const isGoodDog = element.isGoodDog
        
        pupName.textContent = element.name
        
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
    
    pupName.addEventListener("click", (e) => {
        e.preventDefault();
        let dogInformation = document.querySelector('#dog-info');
        dogInformation.innerHTML = ""
        
        dogInformation.append(dogPic, dogName, btn)
    })
    

}

function btnStatus(btn, isGoodDog) {
    if (isGoodDog === true) {
        btn.textContent = "Good Dog!"
    } else {
        btn.textContent = "Bad Dog!"
    }
}