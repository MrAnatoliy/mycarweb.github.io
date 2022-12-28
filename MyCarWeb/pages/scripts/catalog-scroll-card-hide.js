window.onscroll = () => {
    let cars = document.querySelectorAll('.car-card')

    cars.forEach(card =>{
        if(card.getBoundingClientRect().top < 100){
            hide(card)
        }
        if(card.classList.contains("hidden") && card.getBoundingClientRect().top >= 200){
            reveal(card)
        }
    })
}

let hide = (element) => {
    element.classList.add("hidden")
}

let reveal = (element) => {
    element.classList.remove("hidden")
}