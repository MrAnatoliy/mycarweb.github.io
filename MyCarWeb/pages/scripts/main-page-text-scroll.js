const catalog_text = `
        <div class="hero-section">
            <p class="hero-main-text">Used cars for all</p>
            <p class="hero-sub-text">pick up the car you've always dreamed</p>
        </div>
`

const selection_text = `
        <div class="hero-section">
            <p class="hero-main-text">Cant find car by yourself?</p>
            <p class="hero-sub-text">Contact to our experts!</p>
        </div>
`

const calculator_text = `
        <div class="hero-section">
            <p class="hero-main-text">Dont have enough money now?</p>
            <p class="hero-sub-text">Take a loan in our partner banks</p>
        </div>
`

const account_text = `
        <div class="hero-section">
            <p class="hero-main-text">This your account</p>
            <p class="hero-sub-text">You can find your liked car and much more</p>
        </div>
`

let current_text = "catalog";

window.onmousemove = ev => {
    const button = (ev.target.closest(".nav-button") !== null) ? ev.target.closest(".nav-button") : undefined;
    let hero = document.querySelector("div.hero")

    if(button.dataset.type === "catalog" && button.dataset.type != current_text){
        document.querySelector("div.hero-section").remove()
        hero.insertAdjacentHTML("afterbegin", catalog_text);
        current_text = "catalog"
    }else if(button.dataset.type === "selection" && button.dataset.type != current_text){
        document.querySelector("div.hero-section").remove()
        hero.insertAdjacentHTML("afterbegin", selection_text);
        current_text = "selection"
    }
    else if(button.dataset.type === "calculator" && button.dataset.type != current_text){
        document.querySelector("div.hero-section").remove()
        hero.insertAdjacentHTML("afterbegin", calculator_text);
        current_text = "calculator"
    }
    else if(button.dataset.type === "account" && button.dataset.type != current_text){
        document.querySelector("div.hero-section").remove()
        hero.insertAdjacentHTML("afterbegin", account_text);
        current_text = "account"
    }
}