
//main buttons
const addDrink = document.getElementById("add-drink")
const addPerson = document.getElementById("add-person")
const removeDrinkButton = document.getElementById("remove-drink")
const playButton = document.getElementById("play-btn")
const removePersonButton = document.getElementById("remove-person")

//close buttons
const closeButtonOne = document.getElementById("close-btn-one")
const closeButtonTwo = document.getElementById("close-btn-two")
const closeButtonThree = document.getElementById("close-btn-three")
const closeButtonFour = document.getElementById("close-btn-four")
let removeButtonDrinkOption = document.getElementById("remove-drink-options-id")
let deleteDrinkDropdown = document.getElementById("delete-drink-dropdown")

let removeButtonPersonOption = document.getElementById("remove-person-options-id")
let deletePersonDropdown = document.getElementById("delete-person-dropdown")

//modals
const addPersonModal = document.getElementById("modal-add-person")
const addDrinkModal = document.getElementById("modal-add-drink")
const removeDrinkModal = document.getElementById("modal-remove-drink")
const removePersonModal = document.getElementById("modal-remove-person")

// array
const drinkArray = ["Tequila", "Jägermeister", "Fireball", "Whiskey", "Wray and Nephews", "Vodka", "Baby Guinness", "Gin", "Water", "Red Wine",
 "White Wine", "Brandy", "John Smiths", "Sambuca", "Guinness", ]
const personArray = ["Lloyd", "George", "Eddy", "Mike", "Darren", "Russell", "Ben", "Curtis", "Ty", "Jack"]

let drinkIndex = ""
let personIndex = ""


addPerson.addEventListener("click", () => {
    addPersonModal.showModal()
})

addDrink.addEventListener("click", () => {
    addDrinkModal.showModal()
})

removeDrinkButton.addEventListener("click", () => {
    removeDrinkModal.showModal()
    renderDrink()
})

removePersonButton.addEventListener("click", () => {
    removePersonModal.showModal()
    renderPerson()
})
//add all modals


deleteDrinkDropdown.addEventListener("change", () => {
    drinkIndex = deleteDrinkDropdown.selectedIndex
})

removeButtonDrinkOption.addEventListener("click", () => {
    drinkArray.splice(drinkIndex, 1)
    removeDrinkModal.close()
    renderDrink()
})


deletePersonDropdown.addEventListener("change", () => {
    personIndex = deletePersonDropdown.selectedIndex
})

removeButtonPersonOption.addEventListener("click", () => {
    personArray.splice(personIndex, 1)
    removePersonModal.close()
    renderPerson()
})

closeButtonOne.addEventListener("click", (event) => {
    event.preventDefault()
    addPersonModal.close()
})

closeButtonTwo.addEventListener("click", (event) => {
    event.preventDefault()
    removePersonModal.close()
})

closeButtonThree.addEventListener("click", (event) => {
    event.preventDefault()
    addDrinkModal.close()
})

closeButtonFour.addEventListener("click", (event) => {
    event.preventDefault()
    removeDrinkModal.close()
})


document.getElementById("add-person-form").addEventListener("submit", function (event) {
    event.preventDefault()
    addPersonToArray()
    addPersonModal.close()
})  


document.getElementById("add-drink-form").addEventListener("submit", function (event) {
    event.preventDefault()
    addDrinkToArray()
    addDrinkModal.close()
})  

//array functions

function addPersonToArray(){
    let additionalPerson = document.getElementById("add-person-input").value
    personArray.push(additionalPerson)
}

function addDrinkToArray(){
    let additionalDrink = document.getElementById("add-drink-input").value
    drinkArray.push(additionalDrink)
}

playButton.addEventListener("click", () => {
    genResult()
})

function genResult() {
    let personResult = document.getElementById("person-result")
    randomPerson = personArray[(Math.floor(Math.random() * (personArray.length)))];
    personResult.innerHTML = randomPerson

    if ( randomPerson === "Mike") {
    let drinkResult = document.getElementById("drink-result")
    drinkResult.innerHTML = "Whiskey"
    }
    else {
        let drinkResult = document.getElementById("drink-result")
        drinkResult.innerHTML = drinkArray[(Math.floor(Math.random() * (drinkArray.length)))];
    }
    }

function renderDrink() {
    let drinkOptions = ""
    drinkArray.map((drinks,i)=> {
        drinkOptions+= `<option value="${drinks} id="${i}">${drinks}</option>`
    })
    deleteDrinkDropdown.innerHTML = drinkOptions;
}

function renderPerson() {
    let personOptions = ""
    personArray.map((persons,i)=> {
        personOptions+= `<option value="${persons} id="${i}">${persons}</option>`
    })
    deletePersonDropdown.innerHTML = personOptions;
}
