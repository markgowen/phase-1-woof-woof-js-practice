function onPageLoad() {
    
    fetch("http://localhost:3000/pups")
    .then(res => res.json())
    .then(function(data) {
        data.forEach((element) => {
        const dogBar = document.querySelector('#dog-bar');
        const pupName = document.createElement('span');
        pupName.textContent = element.name
        dogBar.appendChild(pupName)
        })
    })
}

onPageLoad()