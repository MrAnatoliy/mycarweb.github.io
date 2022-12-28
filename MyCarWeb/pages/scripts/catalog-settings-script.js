const mileage_slider = document.querySelector('input#mileage')
const mileage_input = document.querySelector('input.mileage-input')

const cost_slider = document.querySelector('input#cost')
const cost_input = document.querySelector('input.cost-input')

mileage_slider.addEventListener("input", () => {
    let mileage_value = parseInt(mileage_slider.value)

    mileage_input.value = `${mileage_value} km`
})

mileage_input.addEventListener("input", () => {
    let input_value = parseInt(mileage_input.value)

    if(input_value != NaN){
        mileage_slider.value = input_value
    }

})


cost_slider.addEventListener("input", () => {
    let cost_value = parseInt(cost_slider.value)

    cost_input.value = `${cost_value} ₽`
})

cost_input.addEventListener("input", () => {
    let input_value = parseInt(cost_input.value)

    if(input_value != NaN){
        cost_slider.value = input_value
    }

})